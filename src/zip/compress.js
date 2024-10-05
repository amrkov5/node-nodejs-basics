import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import zlib from 'zlib';

const compress = async () => {
  const pathToFolder = path.join(import.meta.dirname, 'files');
  pipeline(
    fs.createReadStream(`${pathToFolder}/fileToCompress.txt`),
    zlib.createGzip(),
    fs.createWriteStream(`${pathToFolder}/archive.gz`),
    (err) => {
      if (err) {
        console.error('Falied');
      }
    }
  );
};

await compress();
