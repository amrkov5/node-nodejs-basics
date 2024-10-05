import process from 'process';

const parseArgs = () => {
  const argsArr = process.argv;
  const result = [];
  for (let i = 2; i < argsArr.length - 1; i += 2) {
    result.push(`${argsArr[i].replace('--', '')} is ${argsArr[i + 1]}`);
  }
  console.log(result.join(', '));
};

parseArgs();
