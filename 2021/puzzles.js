import {
  partOne as day01part01,
  partTwo as day01part02,
} from './day01/puzzle.js';

import {
  partOne as day02part01,
  partTwo as day02part02,
} from './day02/puzzle.js';

import {
  partOne as day03part01,
  partTwo as day03part02,
} from './day03/puzzle.js';

import {
  partOne as day04part01,
  partTwo as day04part02,
} from './day04/puzzle.js';

const year2021 = () => {
  console.log();
  console.log('                       2021                       ');
  console.log('..................................................');
  console.log('Day 01 Part 1 -> ', day01part01());
  console.log('       Part 2 -> ', day01part02());
  console.log('Day 02 Part 1 -> ', day02part01());
  console.log('       Part 2 -> ', day02part02());
  console.log('Day 03 Part 1 -> ', day03part01());
  console.log('       Part 2 -> ', day03part02());
  console.log('Day 04 Part 1 -> ', day04part01());
  console.log('       Part 2 -> ', day04part02());
  console.log('..................................................');
  console.log();
};

export { year2021 };
