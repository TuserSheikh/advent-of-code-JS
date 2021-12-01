import {
  partOne as day01part01,
  partTwo as day01part02,
} from './day01/puzzle.js';

import {
  partOne as day02part01,
  partTwo as day02part02,
} from './day02/puzzle.js';

const year2015 = () => {
  console.log();
  console.log('                       2015                       ');
  console.log('..................................................');
  console.log('Day 01 Part 1 -> ', day01part01());
  console.log('       Part 2 -> ', day01part02());

  console.log('Day 02 Part 1 -> ', day02part01());
  console.log('       Part 2 -> ', day02part02());
  console.log('..................................................');
  console.log();
};

export { year2015 };
