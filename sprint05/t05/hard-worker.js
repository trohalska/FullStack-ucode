'use strict'

module.exports = class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get age() {
        return this._age
    }
    set age(value) {
        if (value >= 1 && value < 100) {
            this._age = value;
        }
    }
    get salary() {
        return this._salary
    }
    set salary(value) {
        if (value >= 100 || value < 10000) {
            this._salary = value;
        }
    }
    toObject(){
        return {
            name: this.name,
            age : this.age,
            salary : this.salary
        }
    }
}