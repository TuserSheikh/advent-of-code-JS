import { readFileSync } from 'fs';

const partOne = () => {
  let input = readFileSync('./2021/day03/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let rate = [];

  for (let command of input) {
    let bit = command.split('');
    for (let i in bit) {
      if (bit[i] == 1) {
        rate[i] = rate[i] + 1 || 0;
      } else {
        rate[i] = rate[i] - 1 || 0;
      }
    }
  }

  let gamma = parseInt(rate.map(x => (x >= 0 ? 1 : 0)).join(''), 2);
  let epsilon = parseInt(rate.map(x => (x >= 0 ? 0 : 1)).join(''), 2);

  return gamma * epsilon;
};

const partTwo = () => {
  let input = readFileSync('./2021/day03/input.txt')
    .toString()
    .split('\n')
    .slice(0, -1);

  let oxygen = input.slice();
  let index = 0;
  while (oxygen.length != 1) {
    let mostCommonBit = 0;
    oxygen.forEach(x => (x[index] == 1 ? mostCommonBit++ : mostCommonBit--));
    mostCommonBit = mostCommonBit >= 0 ? 1 : 0;
    oxygen = oxygen.filter(x => x[index] == mostCommonBit);
    index++;
  }

  let CO2 = input.slice();
  index = 0;
  while (CO2.length != 1) {
    let bitZero = 0;
    let bitOne = 0;
    let lessCommonBit = 1;

    CO2.forEach(x => (x[index] == 1 ? bitOne++ : bitZero++));

    if (bitZero <= bitOne || (bitZero > 0 && bitOne == 0)) {
      lessCommonBit = 0;
    }

    CO2 = CO2.filter(x => x[index] == lessCommonBit);

    index++;
  }

  const oxygenRate = parseInt(oxygen[0], 2);
  const CO2Rate = parseInt(CO2[0], 2);

  return oxygenRate * CO2Rate;
};

export { partOne, partTwo };
