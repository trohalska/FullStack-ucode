'use strict'

const Building = require("./building")

module.exports = class Tower extends Building {
    constructor(floors, material, address) {
        super()
        this.floors = floors
        this.material = material
        this.address = address
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


