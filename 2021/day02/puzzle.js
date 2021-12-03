import { readFileSync } from 'fs';

const partOne = () => {
  let input = readFileSync('./2021/day02/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let forward = 0;
  let depth = 0;

  for (let command of input) {
    let [direction, unit] = command.split(' ');

    if (direction == 'forward') {
      forward += +unit;
    } else if (direction == 'down') {
      depth -= +unit;
    } else if (direction == 'up') {
      depth += +unit;
    }
  }

  return forward * Math.abs(depth);
};

const partTwo = () => {
  let input = readFileSync('./2021/day02/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let forward = 0;
  let depth = 0;
  let aim = 0;

  for (let command of input) {
    let [direction, unit] = command.split(' ');

    if (direction == 'forward') {
      forward += +unit;
      depth += aim * +unit;
    } else if (direction == 'down') {
      aim += +unit;
    } else if (direction == 'up') {
      aim -= +unit;
    }
  }

  return forward * depth;
};

export { partOne, partTwo };
