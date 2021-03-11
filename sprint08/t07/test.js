'use strict'

const Hero = require('./models/hero.js')

let IronMan = new Hero()
IronMan.find(1)

let newGuy = new Hero('guy', 'some lucky guy', 'healer')

function save() {
    newGuy.save();
}
function deleteHero() {
    newGuy.delete('guy')
}

setTimeout(save, 2000)
// setTimeout(deleteHero, 4000)




