const { execSync, spawnSync } = require('child_process');
const { existsSync } = require('fs');
const http = require('http');
const fs = require('fs');

function downloadFileAsync(uri, dest){
  return new Promise((resolve, reject)=>{
      // 确保dest路径存在
    const file = fs.createWriteStream(dest);

    http.get(uri, (res)=>{
      if(res.statusCode !== 200){
        reject(res.statusCode);
        return;
      }

      res.on('end', ()=>{
        console.log('download end');
      });

      // 进度、超时等

      file.on('finish', ()=>{
        console.log('finish write file')
        file.close(resolve);
      }).on('error', (err)=>{
        fs.unlink(dest);
        reject(err.message);
      })

      res.pipe(file);
    });
  });
}

const isVersionGreaterThan = (version, targetMajor) => Number(version.split('.')[0]) >= targetMajor;

const trimV = (version) => version.startsWith('v') ? version.slice(1) : version;

const directory = 'logto';
const nodeMajorVersion = 16;

(async () => {
  if (existsSync(directory)) {
    throw new Error(`\`${directory}\` already exists in the current directory.`);
  }

  const nodeVersion = execSync('node -v', { encoding: 'utf-8' });

  if (!isVersionGreaterThan(trimV(nodeVersion), nodeMajorVersion)) {
    throw new Error(`Logto requires NodeJS >= ${nodeMajorVersion}.0.0.`);
  }

  // Download and extract
  await downloadFileAsync("http://github.com/logto-io/logto/releases/latest/download/logto.tar.gz", "logto.tar.gz")
    
  spawnSync(
    'sh',
    ['-c', 'tar -xz logto.tar.gz'],
    { stdio: 'inherit' },
  );

  // Rebuild Argon2
  spawnSync(
    'sh',
    ['-c', 'npx node-pre-gyp rebuild -C .'],
    { stdio: 'inherit', cwd: './logto/packages/core/node_modules/argon2' },
  );
})();