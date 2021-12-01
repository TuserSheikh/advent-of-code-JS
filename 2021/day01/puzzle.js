import { readFileSync } from 'fs';

const partOne = () => {
  let input = readFileSync('./2021/day01/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let result = 0;
  let prevDepth = 0;

  for (let depth of input) {
    if (depth > prevDepth) {
      result++;
    }

    prevDepth = depth;
  }

  return result;
};

const partTwo = () => {
  let input = readFileSync('./2021/day01/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let result = 0;
  let prevWindow;

  for (let i = 0; i < input.length - 2; i++) {
    let window = +input[i] + +input[i + 1] + +input[i + 2];

    if (prevWindow && window > prevWindow) {
      result++;
    }

    prevWindow = window;
  }

  return result;
};

export { partOne, partTwo };
