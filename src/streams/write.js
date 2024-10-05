import fs from 'fs';
import path from 'path';
import process from 'process';

const write = async () => {
  const pathToFile = path.join(import.meta.dirname, './files/fileToWrite.txt');
  const writeStream = fs.createWriteStream(pathToFile);
  process.stdout.write('To exit press Ctrl+C\n');
  process.stdin.pipe(writeStream);
};

await write();
