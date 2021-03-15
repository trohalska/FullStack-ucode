const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bodyParser = require('body-parser')
const session = require('express-session')
const iconv = require('iconv-lite')
const PORT = process.env.PORT ?? 8080

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(
    session({
        secret: 'password secret',
        saveUninitialized: true
    })
)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', function (req, res) {
    const ss = req.session
    if (ss.errorMsg !== undefined) {
        return res.render('index',  {
            errorMsg: ss.errorMsg
        })
    }

    res.render('index')
})

app.post('/charset', (req, res) => {
    const ss = req.session
    const rb = req.body

    if (!rb) {
        ss.errorMsg = ''
        return res.sendStatus(400)
    } else if (rb.str === '') {
        ss.errorMsg = 'Input string is empty!'
        return res.redirect('/')
    }

    let select = (rb.sel instanceof String) ? [ rb.sel ] : rb.sel
    let message = rb.str

    let utf = (select.includes('UTF-8'))
        ? message
        : ''
    let iso = (select.includes('ISO-8859-1'))
        ? iconv.encode(iconv.decode(message, 'utf8'), 'iso-8859-1').toString()
        : ''
    let win = (select.includes('Windows-1252'))
        ? iconv.encode(iconv.decode(message, 'utf8'), 'cp1252').toString()
        : ''

    res.render('index',  {
        input: rb.str,
        utf: utf,
        iso: iso,
        win: win,
        errorMsg: ''
    })
})



