const { execSync, spawnSync, spawn } = require('child_process');
const { existsSync } = require('fs');

const isVersionGreaterThan = (version, targetMajor) => Number(version.split('.')[0]) >= targetMajor;

const trimV = (version) => version.startsWith('v') ? version.slice(1) : version;

const directory = 'logto';
const nodeMajorVersion = 16;

(async () => {
  if (!existsSync(directory)) {
    const nodeVersion = execSync('node -v', { encoding: 'utf-8' });

    if (!isVersionGreaterThan(trimV(nodeVersion), nodeMajorVersion)) {
      throw new Error(`Logto requires NodeJS >= ${nodeMajorVersion}.0.0.`);
    }

    // Download and extract
    spawnSync(
      'sh',
      ['-c', 'curl -L https://github.com/logto-io/logto/releases/latest/download/logto.tar.gz | tar -xz'],
      { stdio: 'inherit' },
    );

    // Rebuild Argon2
    spawnSync(
      'sh',
      ['-c', 'npx node-pre-gyp rebuild -C .'],
      { stdio: 'inherit', cwd: './logto/packages/core/node_modules/argon2' },
    );
  } else {
    const startCommand = `cd ${directory} && npm start`;
    spawn('sh', ['-c', startCommand], { stdio: 'inherit' });
  }
})();
