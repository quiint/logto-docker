const { spawn } = require('child_process')

spawn('sh', ['-c', `cd logto && npm start`], {
  stdio: 'inherit',
})
