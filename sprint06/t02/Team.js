'use strict'

const {Avenger} = require("./Avenger")

class Team {
    constructor(id, avengers) {
        this.id = id
        this.avengers = avengers
    }
    battle(damage) {
        for (let avenger of this.avengers) {
            avenger.hp -= damage.damage
        }
    }
    calculateLosses(clonedTeam) {
        let count = 0;
        clonedTeam.forEach(avenger => count =
            avenger.hp < 1
                ? count + 1
                : count
        )
        console.log(count === 0
            ? `We haven't lost anyone in this battle!`
            : `In this battle we lost ${count} Avengers.`
        )
    }
    clone() {
        let arr = []
        this.avengers.forEach(el => {
            let copy = Object.assign({}, el)
            Object.setPrototypeOf(copy, Object.getPrototypeOf(el))
            arr.push(copy)
        })
        return this.avengers = arr
    }
}

module.exports.Team = Team