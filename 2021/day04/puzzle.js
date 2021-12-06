import { readFileSync } from 'fs';

const partOne = () => {
  let input = readFileSync('./2021/day04/input.txt')
    .toString()
    .split('\n\n')
    .slice(0, -1);

  const chosenNumber = input[0].split(',').map(x => +x);
  const inputNumber = input.slice(1);
  let numbers = [...Array(inputNumber.length)].map(_ => Array(5));

  for (let i in inputNumber) {
    let inputNumberDiv = inputNumber[i].split('\n');
    for (let j in inputNumberDiv) {
      numbers[i][j] = inputNumberDiv[j]
        .split(' ')
        .filter(x => x)
        .map(x => [+x, 0]);
    }
  }

  let ans = 0;

  win: for (let chosen of chosenNumber) {
    for (let i in numbers) {
      for (let j in numbers[i]) {
        for (let k in numbers[i][j]) {
          if (numbers[i][j][k][0] == chosen) {
            numbers[i][j][k][1] = 1;
          }
        }
      }

      let sumUnMarked = 0;
      let solved = false;

      for (let row in numbers[i]) {
        let rowMarked = 0;
        let colMarked = 0;
        for (let col in numbers[row]) {
          rowMarked += numbers[i][row][col][1];
          colMarked += numbers[i][col][row][1];
          if (numbers[i][row][col][1] == 0) {
            sumUnMarked += numbers[i][row][col][0];
          }
        }

        if (rowMarked == 5 || colMarked == 5) {
          solved = true;
        }
      }

      if (solved) {
        ans = sumUnMarked * chosen;
        break win;
      }
    }
  }

  return ans;
};

const partTwo = () => {
  return null;
};

export { partOne, partTwo };
