'use strict'

const Building = require("./building")

module.exports = class Tower extends Building {
    constructor(hasElevator, arcCapacity, height) {
        super()
        this.hasElevator = hasElevator
        this.arcCapacity = arcCapacity
        this.height = height
    }
    get hasElevator() {
        return this._hasElevator
    }
    set hasElevator(value) {
        this.elevator = value === true ? '+' : '-'
    }
    getFloorHeight() {
        return this.height / this.floors
    }
    toString() {
        return `Floors: ${this.floors}\n` +
            `Material: ${this.material}\n` +
            `Address: ${this.address}\n` +
            `Elevator: ${this.elevator}\n` +
            `Arc reactor capacity: ${this.arcCapacity}\n` +
            `Height: ${this.height}\n` +
            `Floor height: ${this.getFloorHeight()}`
    }
}


