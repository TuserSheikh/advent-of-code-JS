import { readFileSync } from 'fs';

const partOne = () => {
  let input = readFileSync('./2015/day02/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let result = 0;

  for (let dimension of input) {
    let [h, w, l] = dimension
      .split('x')
      .map(n => +n)
      .sort((a, b) => a - b);

    result += h * w + 2 * l * w + 2 * w * h + 2 * h * l;
  }

  return result;
};

const partTwo = () => {
  let input = readFileSync('./2015/day02/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let result = 0;

  for (let dimension of input) {
    let [h, w, l] = dimension
      .split('x')
      .map(n => +n)
      .sort((a, b) => a - b);

    result += h + h + w + w + h * w * l;
  }

  return result;
};

export { partOne, partTwo };
