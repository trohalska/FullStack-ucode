'use strict'

let checkDivision = (start = 1, end = 60) => {
    for (let i = start; i <= end; i++) {
        let result = []
        if (i % 2 !== 0 &&
            i % 3 !== 0 &&
            i % 10 !== 0) {
            result.push('-')
        } else {
            if (i % 2 === 0) {
                result.push('is divisible by 2')
            }
            if (i % 3 === 0) {
                result.push('is divisible by 3')
            }
            if (i % 10 === 0) {
                result.push('is divisible by 10')
            }
            result = result.join(', ')
        }
        console.log(`The number ${i} ${result}`)
    }
}

module.exports.checkDivision = checkDivision
