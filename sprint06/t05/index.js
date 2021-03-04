'use strict'

const express = require('express')
const http = require('http');
const hostname = '127.0.0.1'
const port = 8080
const app = express()

const normal = require('./normal-router')
const quantum = require('./quantum-router')

const time = normal.calculateTime()
const quantumTime = quantum.calculateTime()

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

app.set('view engine', 'ejs')
app.set('views', './t05/views')

app.get("/", (req, res, next) => {
    let html =
        `<a href="/normal">normal space</a><br><br>` +
        `<a href="/quantum">quantum space</a>`
    res.send(html)
})

app.get('/normal', (req, res, next) => {
    res.render('normal', {
            year: time.years(),
            month: time.months(),
            day: time.days()
        })
})

app.get('/quantum', (req, res, next) => {
    res.render('quantum', {
            quantumYear : quantumTime[0],
            quantumMonth : quantumTime[1],
            quantumDay: quantumTime[2]
        })
})
