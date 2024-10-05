import fs from 'fs';
import path from 'path';
import process from 'process';

const read = async () => {
  const pathToFile = path.join(import.meta.dirname, './files/fileToRead.txt');
  const readStream = fs.createReadStream(pathToFile);

  readStream.pipe(process.stdout);
  readStream.on('end', () => {
    process.stdout.write('\n');
  });
};

await read();
