const child_process = require('child_process');

const serverProcess = child_process.spawn('node', ['index.js'], {
  stdio: 'inherit'
});

serverProcess.on('exit', (code, signal) => {
  console.log(`Server process exited with code ${code} and signal ${signal}`);
});
