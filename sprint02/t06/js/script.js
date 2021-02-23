'use strict';

function output(str) {
  alert(str);
  console.log(str);
}

function greeting() {
  let regexName = /^[a-z]+$/i;

  let fname = prompt('Enter your first name: ');
  if (!fname || !regexName.exec(fname)) {
    output('Wrong input!');
    return;
  }

  let lname = prompt('Enter your last name: ');
  if (!lname || !regexName.exec(lname)) {
    output('Wrong input!');
    return;
  }

  fname = fname[0].toUpperCase() + fname.slice(1);
  lname = lname[0].toUpperCase() + lname.slice(1);
  output(`Greeting, ${fname} ${lname}!`);
}

greeting();
