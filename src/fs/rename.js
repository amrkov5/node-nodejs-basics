import path from 'path';
import fs from 'fs';

const rename = async () => {
  const pathToFile = path.join(import.meta.dirname, './files');
  fs.stat(`${pathToFile}/properFilename.md`, (err) => {
    if (err && err.code === 'ENOENT') {
      fs.rename(
        `${pathToFile}/wrongFilename.txt`,
        `${pathToFile}/properFilename.md`,
        (err) => {
          if (err && err.code === 'ENOENT') {
            throw new Error('FS operation failed');
          }
          if (err) {
            throw new Error(err.message);
          }
        }
      );
    } else if (err) {
      throw new Error(err.message);
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await rename();
