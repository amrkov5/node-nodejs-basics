import cp from 'child_process';
import path from 'path';
import process from 'process';

const spawnChildProcess = async (args) => {
  const pathToChildScript = path.join(
    import.meta.dirname,
    'files',
    'script.js'
  );
  const childProcess = cp.fork(pathToChildScript, args);
  childProcess.on('message', (data) => {
    process.stdout.write(`Recieved from child stdout: ${data}`);
  });
  // Write your code here
};

// Put your arguments in function call to test this functionality
spawnChildProcess([3, 1, 2]);
