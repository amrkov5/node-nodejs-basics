import fs from 'fs';
import path from 'path';
import.meta.dirname;

const read = async () => {
  const pathToFile = path.join(
    import.meta.dirname,
    './files/fileToRead.txt'
  );
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    if (err) {
      throw new Error(err.message);
    }
    console.log(data);
  });
};

await read();
