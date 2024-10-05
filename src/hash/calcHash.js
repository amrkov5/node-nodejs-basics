import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const calculateHash = async () => {
  const pathToFile = path.join(
    import.meta.dirname,
    './files/fileToCalculateHashFor.txt'
  );
  const hash = crypto.createHash('sha256');
  const input = fs.createReadStream(pathToFile);

  input.pipe(hash).on('finish', () => {
    const result = hash.digest('hex');
    console.log(result);
    input.close();
  });
};

await calculateHash();
