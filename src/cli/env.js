import process from 'process';

const parseEnv = () => {
  const env = process.env;
  const result = Object.keys(env)
    .filter((key) => {
      if (key.includes('RSS_')) {
        return key;
      }
      return;
    })
    .map((key) => `${key}=${env[key]}`)
    .join('; ');
  console.log(result);
};

parseEnv();
