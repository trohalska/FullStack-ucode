'use strict';

function checkBrackets(str) {
  if (!str || typeof str !== 'string')
    return 0;

  let checked = 0,
      mustAdd = 0,
      i;

  for (i = 0; i < str.length; ++i) {
    if (str[i] === '(')
      checked++;
    else if (str[i] === ')')
      checked ? checked-- : mustAdd++;
  }
  mustAdd += checked;

  return mustAdd;
}

console.log(checkBrackets('1)()(())2(()')); // 2
console.log(checkBrackets(NaN)); // 0