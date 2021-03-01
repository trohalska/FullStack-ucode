'use strict';

let generator = () => {
    console.log('Print "close" for exit loop.')
    let previous = 1;
    while (true) {
        let input = prompt(`Previous result: ${previous}. Enter a new number: `);
        if (+input) {
            previous += (+input);
        } else {
            console.error('Invalid number!');
        }
        if (input === 'close') {
            break;
        }
        if (previous > 10000) {
            previous = 1;
        }
    }
}

generator();