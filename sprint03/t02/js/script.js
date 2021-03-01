'use strict';

let get = (id) => document.querySelector(id);
let getAll = (id) => document.querySelectorAll(id);

let timerId;
let message = get('#message');
let messageTime = 10;
let maxCalories = 500;
let addCalories = 200;
let sec = 1000;

// ---------------- ADDITIONAL FUNCTIONAL

let reverseButtons = (events, on, off) => {
    for (let event of events) {
        let onclick = event.getAttribute(on);
        event.setAttribute(off, onclick);
        event.removeAttribute(on);
    }
};
let showMsg = (interval, str, newStr = '', calories) => {
    message.innerHTML = str;
    let time = +interval * sec;
    clearTimeout(timerId);
    if (!calories || calories < maxCalories)
        timerId = setTimeout(() => message.innerHTML = newStr, time);
    else
        timerId = setTimeout(() => message.innerHTML = '', time);
};

// ---------------- MAIN FUNCTIONAL

class Human {
    constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories;
    }
    sleepFor() {
        let interval = prompt("Enter sleeping time (in seconds):");
        if (interval && !(+interval)) {
            alert("Invalid input");
            return;
        }
        let events = getAll('[onclick]');
        reverseButtons(events, 'onclick', 'off');
        setTimeout(() => reverseButtons(events, 'off', 'onclick'), +interval * 1000);
        showMsg(+interval, 'I\'m sleeping', 'I\'m awake now');
    }

    feed() {
        if (this.calories >= maxCalories) {
            showMsg(10, 'I\'m not hungry');
            return;
        }
        this.calories += addCalories;
        if (this.calories > maxCalories) {
            this.calories = maxCalories;
        }
        get("#calories > span").innerHTML = this.calories;
        showMsg(messageTime, 'Nom nom nom', 'I\'m still hungry', this.calories);
    }

    makingHungry() {
        let calories = get('#calories > span');

        this.calories -= addCalories;
        if (this.calories < 0) {
            this.calories = 0;
        }
        calories.innerHTML = this.calories;
    }
}

class Superhero extends Human {
    constructor(option) {
        super(option);
    }
    fly() {
        showMsg(messageTime, 'I\'m flying');
    }
    fightWithEvil() {
        showMsg(messageTime, 'Khhhh-chh... Bang-g-g-g... Evil is defeated!');
    }
}

let person = new Superhero({
    firstName: 'Guy',
    lastName: 'Ordinal',
    gender: 'male',
    age: 17,
    calories: 400
});

let getNewValue = (target) => {
    let key = target.getAttribute('id'),
        p = get(`#${key}`),
        span = p.querySelector('span'),
        newValue = prompt(`Enter new value for ${key}:`);

    if (newValue && newValue.length < 10) {
        if (typeof person[key] === 'number') {
            if (!isNaN(+newValue)) {
                person[key] = newValue;
                span.innerHTML = newValue;
            } else {
                alert("Incorrect input");
            }
        } else {
            person[key] = newValue;
            span.innerHTML = newValue;
        }
    } else {
        alert("Incorrect input");
    }
};

let renderProperties = () => {
    let div = document.querySelector("#properties");

    for (const [key, value] of Object.entries(person)) {
        div.insertAdjacentHTML("beforeend",
            `<p class="property" id="${key}" onclick="getNewValue(this)">${key}: ` +
            `<span class="propValue">${value}</span></p>`);
    }
};

let turnToSuperhero = () => {
    if (person.calories < maxCalories) {
        showMsg(messageTime, "I\'m too hungry, feed me");
        return;
    }
    maxCalories = 1000;
    get('#human').setAttribute('src', 'assets/images/superhero.jpg');
    get("#turn").insertAdjacentHTML('afterend',
        '<br><button onclick="person.fly()">Fly</button>' +
        '<button onclick="person.fightWithEvil()">Fight with evil</button>');
    get("#properties").removeChild(get("#turn"));
};

renderProperties();
setTimeout(() => {
    setTimeout(function run() {
        person.makingHungry();
        setTimeout(run, 60 * sec);
    });
}, 5 * sec);
