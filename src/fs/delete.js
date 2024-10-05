import fs from 'fs';
import path from 'path';

const remove = async () => {
  const pathToFile = path.join(
    import.meta.dirname,
    './files/fileToRemove.txt'
  );
  fs.rm(pathToFile, (err) => {
    if (err && err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    if (err) {
      throw new Error(err.message);
    }
  });
};

await remove();
