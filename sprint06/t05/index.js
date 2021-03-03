'use strict'

const express = require('express');
const app = express();

const normal = require('./normal-router')
const quantum = require('./quantum-router')

const PORT = 1234;

const time = normal.calculateTime();
const quantumTime = quantum.calculateTime();

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});

app.set("view engine", "ejs");
app.set("views", "./t05/views");

app.get("/", (req, res, next) => {
    res.send('<h1>Go to localhost:1234/normal to see normal space and localhost:1234/quantum to see quantum space</h1>')
});

app.get("/normal", (req, res, next) => {
    res.render("normal",
        {
            year: time.years(),
            month: time.months(),
            day: time.days()
        });
});

app.get("/quantum", (req, res, next) => {
    res.render("quantum",
        {
            quantumYear : quantumTime[0],
            quantumMonth : quantumTime[1],
            quantumDay: quantumTime[2]
        });
});

app.get("/quantum", (req, res, next) => {
    res.render("quantum",
        {
            test: "rofl",
        });
});