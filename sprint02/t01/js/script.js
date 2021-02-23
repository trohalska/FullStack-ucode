'use strict'

let numberVal = 5;
let bigIntVal = 1234567890123456789012345678901234567890n;
let stringVal = '"my name"';
let boolVal = true;
let nullVal = null;
let undefVal;
let objectVal = new Array(2);
let symbolVal = Symbol("id");
let functionVal = alert;

alert(`numberVal is ${typeof numberVal}`
      + '\nbigIntVal is ' + typeof bigIntVal
      + '\nstringVal is ' + typeof stringVal
      + '\nboolVal is ' + typeof boolVal
      + '\nnullVal is ' + typeof nullVal
      + '\nundefVal is ' + typeof undefVal
      + '\nobjectVal is ' + typeof objectVal
      + '\nsymbolVal is ' + typeof symbolVal
      + '\nfunctionVal is ' + typeof functionVal
      );
