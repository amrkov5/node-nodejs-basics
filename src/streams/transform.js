import process from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${String(chunk).split('').toReversed().join('')}\n`);
    },
  });
  process.stdout.write('To exit press Ctrl+C\n');
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
