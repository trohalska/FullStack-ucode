'use strict';

let get = (id) => document.querySelector(id);

let parsePhone = () => {
    let wordInput = word.value.trim()
    if (validation(wordInput)) return

    if (wordInput.match(/^\d{10}$/g)) {
        output.value = `${wordInput.slice(0,3)}-${wordInput.slice(3,6)}-${wordInput.slice(6,10)}`
    } else {
        output.value = 'Invalid phone number.'
    }
    phoneSpan.innerHTML = ++phone;
    document.cookie = `phone=${phone}`
}

let wordCount = () => {
    let wordInput = word.value.trim()
    let textInput = text.value.trim()
    if (validation(wordInput, textInput)) return

    if (wordInput.match(/^\w+$/gi)) {
        output.value = 'Word count: ' + (text.value.match(new RegExp(`${wordInput}`, 'g')) || []).length
    } else {
        output.value = 'Invalid input.'
    }
    countSpan.innerHTML = ++countW;
    document.cookie = `countW=${countW}`
}

let wordReplace = () => {
    let wordInput = word.value.trim()
    let textInput = text.value.trim()
    if (validation(wordInput, textInput)) return

    if (wordInput.match(/^\w+$/gi)) {
        output.value = textInput.replace(/\S+/g, wordInput)
    } else {
        output.value = 'Invalid input.'
    }
    replaceSpan.innerHTML = ++replaceW;
    document.cookie = `replaceW=${replaceW}`
}

let validation = (wordInput, textInput) => {
    if (word.value === '' || wordInput.length === 0) {
        alert('Word input is empty. Try to input something in "Word input".')
        return true
    }
    if (textInput !== undefined && (text.value === '' || textInput.length === 0)) {
        alert('Text iInput is empty. Try to input something in "Text input".')
        return true
    }
    return false
}


let delay = 60 // seconds

let setCookies = () => {
    phone = 0
    countW = 0
    replaceW = 0
    document.cookie = `phone=0`
    document.cookie = `countW=0`
    document.cookie = `replaceW=0`
    updateValues()
    word.value = ''
    text.value = ''
    output.value = ''
}
let getCookies = () => {
    return document.cookie
        .split(';')
        .reduce((res, c) => {
            const [key, val] = c.trim().split('=').map(decodeURIComponent)
            try {
                return Object.assign(res, { [key]: JSON.parse(val) })
            } catch (e) {
                return Object.assign(res, { [key]: val })
            }
        }, {})
}
let updateValues = () => {
    phoneSpan.innerHTML = phone
    countSpan.innerHTML = countW
    replaceSpan.innerHTML = replaceW
}

let word = get("#word")
let text = get("#text")
let output = get("#output")
let phoneSpan = get('#phone')
let countSpan = get('#count')
let replaceSpan = get('#replace')

let phone = 0
let countW = 0
let replaceW = 0

let cookies = getCookies()
if (cookies.phone === undefined) {
    setCookies()
} else {
    phone = cookies.phone
    countW = cookies.countW
    replaceW = cookies.replaceW
    updateValues()
}
setInterval(setCookies, delay * 1000)
// console.log(cookies)
