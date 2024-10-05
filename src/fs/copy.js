import fs from 'fs';
import path from 'path';

const copy = async () => {
  const pathToFiles = import.meta.dirname;
  fs.lstat(`${pathToFiles}/files_copy/`, (err) => {
    if (err) {
      fs.cp(
        `${pathToFiles}/files/`,
        `${pathToFiles}/files_copy/`,
        { recursive: true },
        (err) => {
          if (err) {
            if (err.code == 'ENOENT') {
            }
            throw new Error(`Failed to copy folder: ${err.message}`);
          }
        }
      );
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await copy();
