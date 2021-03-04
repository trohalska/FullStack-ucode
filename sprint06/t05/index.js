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
    res.send(`<h1>Go to localhost:${port}/normal to see normal space and localhost:${port}/quantum to see quantum space</h1>`)
    res.send(`<h1>Go to localhost:${port}/quantum to see quantum space</h1>`)
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

// app.get("/quantum", (req, res, next) => {
//     res.render("quantum",
//         {
//             test: "rofl",
//         });
// });