'use strict'

let firstUpper = (str) => {
    if (str === null) {
        return ''
    }
    str = str.trim()
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    return str
}

module.exports.firstUpper = firstUpper