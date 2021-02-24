'use strict';

String.prototype.removeDuplicates = function () {
    let words = this.split(' ');
    let new_words = [];

    for (let i = 0; i < words.length; i++) {
        if (!hasDuplicate(words[i], words, i)) {
            new_words.push(words[i]);
        }
    }
    let result = '';
    new_words.forEach((value) => result += value + ' ')
    return result.trim();
};

let hasDuplicate = (word, arr, j) => {
    if (word === "") {
        return true;
    }
    for (let i = 0; i < j; i++) {
        if (word === arr[i]) {
            return true;
        }
    }
    return false;
};

let str = "Giant Spiders? What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders? What’s next? Giant Snakes?

str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .

str = str.removeDuplicates();
console.log(str);
// . ?

