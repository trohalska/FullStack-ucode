'use strict';

let createP = (str) => {
    let p = document.createElement('p');
    p.textContent = str;
    list.append(p);
}
let ifSmall = (n) => {return n = n < 10 ? `0${n}` : n}

let getFormattedDate = (d) => {
    return ' [' + ifSmall(d.getDate()) + '.' + ifSmall(d.getMonth() + 1) + '.'
        + (d.getFullYear() - 2000) + ', ' + ifSmall(d.getHours()) + ':'
        + ifSmall(d.getMinutes()) + ':' + ifSmall(d.getSeconds()) + ']';
}

let showLocalStorage = () => {

    if (localStorage.length === 0) {
        createP('[Empty]');
        return;
    }
    for (let i = 0; i < localStorage.length; ++i) {
        createP(`--> ${localStorage.getItem(localStorage.key(i))}`);
        count++;
    }
}

let addToLocalStorage = () => {
    let textValue = text.value.trim();

    if (text.value === '' || textValue.length === 0) {
        alert('It\'s empty. Try to input something in "Text input".');
        return;
    }
    if (count === 0)
        document.querySelector("#localStorageList p").remove();

    textValue += getFormattedDate(new Date());
    localStorage.setItem(count, textValue);
    createP(`--> ${textValue}`);

    text.value = '';
    count++;
}

let clearLocalStorage = () => {
    if (confirm("Are you sure?")) {
        document.querySelectorAll('#localStorageList p').forEach(p => p.remove());
        createP('[Empty]');
        localStorage.clear();
        count = 0;
    }
}

let list = document.querySelector("#localStorageList");
let text = document.querySelector("#text");
let count = 0;

showLocalStorage();
// console.log(localStorage);
