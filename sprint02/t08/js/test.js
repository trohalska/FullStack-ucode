'use strict';

describe("checkBrackets", function () {
  describe("incorrect", function () {
    it("Number is 0", function() {
      assert.equal(checkBrackets(4), 0);
    });
    it("Undefined is 0", function() {
    });
    it("Null is 0", function() {
      assert.equal(checkBrackets(null), 0);
    });
    it("Array is 0", function() {
      assert.equal(checkBrackets([1, 2, 3]), 0);
    });
    it("NaN is 0", function() {
      assert.equal(checkBrackets(NaN), 0);
    });
  });
  describe("correct", function () {
    it("1)()(())2(() must return 2", function() {
      assert.equal(checkBrackets("1)()(())2(()"), 2);
    });
    it(")()()()( must return 2", function() {
      assert.equal(checkBrackets(")))"), 2);
    });
    it(")))) must return 4", function() {
      assert.equal(checkBrackets("))))"), 4);
    });
    it("(()(aaa((( must return 5", function() {
      assert.equal(checkBrackets("(()(aaa((("), 5);
    });
    it("a()b() must return 0", function() {
      assert.equal(checkBrackets("a()b()"), 0);
    });
    it("()()(((()))) return 2", function() {
      assert.equal(checkBrackets("()()(((())))"), 0);
    });
    it("(((((((((()))))))))) return 0", function() {
      assert.equal(checkBrackets("(((((((((())))))))))"), 0);
    });
    it("Hello (World)(!) must return 0", function() {
      assert.equal(checkBrackets("Hello (World)(!)"), 0);
    });
    it("((a()b()) must return 1", function() {
      assert.equal(checkBrackets("((a()b())"), 1);
    });
    it("(1 * (2 + 2)*(58 - 14)) must return 0", function() {
      assert.equal(checkBrackets("(1 * (2 + 2)*(58 - 14))"), 0);
    });
  });
});
