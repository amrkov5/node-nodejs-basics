import { cpus } from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const pathToWorker = path.join(import.meta.dirname, 'worker.js');
  const cpu = cpus().length;
  const promises = [];
  for (let i = 0; i < cpu; i += 1) {
    const data = 10 + i;
    const promise = new Promise((resolve) => {
      const worker = new Worker(pathToWorker, { workerData: data });
      worker.on('message', (result) => {
        resolve({ status: 'resolved', data: result });
      });
      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
    });
    promises.push(promise);
  }
  Promise.all(promises).then((results) => console.log(results));
};

await performCalculations();
