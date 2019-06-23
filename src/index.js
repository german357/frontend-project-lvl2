import read from 'readline-sync';

export default () => {
  const name = read.question('Your name? ');
  console.log(`Welcome, ${name}!`);
};
