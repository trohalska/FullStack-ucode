'use strict';

function checkDivision(beginRange, endRange) {
  do {
    let str = beginRange,
        flag = false;
    if ((beginRange % 2) === 0) {
      str += ' is even';
      flag = true;
    }
    if ((beginRange % 3) === 0) {
      if (flag === true)
        str += ',';
      str += ' is a multiple of 3';
      flag = true;
    }
    if ((beginRange % 10) === 0) {
      if (flag === true)
        str += ',';
      str += ' is divisible by 10';
      flag = true;
    }
    if (flag === false)
      str += ' -';
    flag = false;
    console.log(str + '\n');
    beginRange += 1;
  } while (beginRange <= endRange);
}

let num1 = +prompt('Enter begin range number: ', 1),
    num2 = +prompt('Enter end range number: ', 100);

if (Number.isInteger(num1) && Number.isInteger(num2)) {
  if (num1 <= num2)
    checkDivision(num1, num2);
  else
    checkDivision(num2, num1);
} else {
  alert('Wrong input. Try again!');
}