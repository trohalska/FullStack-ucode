'use strict'

module.exports = class Building {

    constructor(floors, material, address) {
        this.floors = floors
        this.material = material
        this.address = address
    }

    toString() {
        return `Floors: ${this.floors}\n` +
            `Material: ${this.material}\n` +
            `Address: ${this.address}`
    }
};