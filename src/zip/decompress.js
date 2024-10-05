import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import zlib from 'zlib';

const decompress = async () => {
  const pathToFolder = path.join(import.meta.dirname, 'files');
  pipeline(
    fs.createReadStream(`${pathToFolder}/archive.gz`),
    zlib.createUnzip(),
    fs.createWriteStream(`${pathToFolder}/fileToCompress.txt`),
    (err) => {
      if (err) {
        console.error('Falied');
      }
    }
  );
};

await decompress();
