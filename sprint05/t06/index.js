'use strict'

let getAnonymous = (name, alias, affiliation) => {
    let Anonymous = class {
        #privateField;
        constructor(name, alias, affiliation) {
            this.name = name;
            this.alias = alias;
            this.affiliation = affiliation;
            this.#privateField = 'hidden info'
        }
        getPrivate(){
            return this.#privateField;
        }
    }
    return new Anonymous(name, alias, affiliation);
}

module.exports.getAnonymous = getAnonymous;