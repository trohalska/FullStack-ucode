const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const session = require('express-session')
const PORT = process.env.PORT ?? 8080

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(
    session({
        secret: 'session secret',
        saveUninitialized: true
    })
)

const userRouter = require('./routes/userRouter')
const homeRouter = require('./routes/homeRouter')
app.use('/users', userRouter)
app.use('/', homeRouter)

app.use(function (req, res, next) {
    res.status(404).send('Not Found')
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})