'use strict'

class ExtendableFunc extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)')
        return this.self = this.bind(this)
    }
}


class Avenger extends ExtendableFunc {
    constructor({ heroName, alias, gender, age, powers }) {
        super()
        this.heroName = heroName
        this.alias = alias
        this.gender = gender
        this.age = age
        this.powers = powers
    }

    toString() {
        return `name: ${this.heroName}\n` +
            `gender: ${this.gender}\n` +
            `age: ${this.age}`
    }
    call() {
        return `${this.alias.toUpperCase()}\n` + this.powers.join('\n');
    }
}

module.exports.Avenger = Avenger;