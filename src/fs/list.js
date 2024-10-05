import fs from 'fs';
import path from 'path';

const list = async () => {
  const pathToFolder = path.join(import.meta.dirname, './files');
  fs.readdir(pathToFolder, { recursive: true }, (err, files) => {
    if (err && err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    if (err) {
      throw new Error(err.message);
    }
    console.log(files);
  });
};

await list();
