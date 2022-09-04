const { spawnSync, spawn } = require('child_process')
const { existsSync } = require('fs')

const directory = 'logto'
const startCommand = `cd ${directory} && npm start`

try {
  if (!existsSync(directory)) {
    // Download and extract
    spawnSync(
      'sh',
      [
        '-c',
        'curl -L https://tool.mintimate.cn/ghs/https://github.com/logto-io/logto/releases/latest/download/logto.tar.gz | tar -xz',
      ],
      { stdio: 'inherit' },
    )
  }
} finally {
  spawn('sh', ['-c', startCommand], { stdio: 'inherit' })
}
