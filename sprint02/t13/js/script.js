'use strict';

function Calculator() {
  this.result = 0;

  this.init = function(x) {
    this.result = x;
    return this;
  }
  this.add = function(x) {
    this.result += x;
    return this;
  }
  this.mul = function(x) {
    this.result *= x;
    return this;
  }
  this.div = function(x) {
    this.result /= x;
    return this;
  }
  this.sub = function(x) {
    this.result -= x;
    return this;
  }
  this.alert = function() {
    return setTimeout(() => alert(this.result), 5000);
  }
}

const calc = new Calculator();

console.log(
  calc
    .init(2)
    .add(2) // 2*2=4
    .mul(3) // 4*3=12
    .div(4) // 12/4=3
    .sub(2) // 3-2=1
    .result // 1
);

calc.alert();