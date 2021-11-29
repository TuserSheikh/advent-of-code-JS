import { readFileSync } from 'fs';

const partOne = () => {
  const input = readFileSync('./2015/day01/input.txt').toString();

  let result = 0;

  for (let i of input) {
    if (i == '(') {
      result++;
    } else {
      result--;
    }
  }

  return result;
};

const partTwo = () => {
  const input = readFileSync('./2015/day01/input.txt').toString();

  let result = 0;

  for (let i in input) {
    if (input[i] == '(') {
      result++;
    } else {
      result--;
    }

    if (result == -1) {
      return ++i;
    }
  }
};

export { partOne, partTwo };
