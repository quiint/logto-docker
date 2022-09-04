const { spawnSync } = require('child_process')

// Download and extract
spawnSync(
  'sh',
  [
    '-c',
    'curl -L https://github.com/logto-io/logto/releases/latest/download/logto.tar.gz | tar -xz',
    // 'curl -L https://tool.mintimate.cn/ghs/https://github.com/logto-io/logto/releases/latest/download/logto.tar.gz | tar -xz',
  ],
  { stdio: 'inherit' },
)
