import path from 'path';
import fs from 'fs';

const create = async () => {
  const pathToFile = path.join(import.meta.dirname, './files/fresh.txt');
  fs.stat(pathToFile, (err) => {
    if (err) {
      fs.writeFile(pathToFile, 'I am fresh and young', (err) => {
        if (err) {
          throw new Error(err.message);
        }
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();
