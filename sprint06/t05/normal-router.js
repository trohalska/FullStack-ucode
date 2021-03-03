'use strict'

function calculateTime() {
    let date = new Date(1939, 0, 1);
    return date
}
let now = new Date ()
Date.prototype.years = function() {

    return -(this.getYear() - now.getYear())
}
Date.prototype.months = function() {
    return -(this.getMonth() - now.getMonth())

}
Date.prototype.days = function() {
    return -(this.getDate() - now.getDate())
}
module.exports.calculateTime = calculateTime;