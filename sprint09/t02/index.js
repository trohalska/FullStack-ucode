const express = require('express')
const expressThymeleaf = require('express-thymeleaf')
const {TemplateEngine} = require('thymeleaf')
const bcrypt = require('bcrypt')
const shortid = require('shortid')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const PORT = process.env.PORT ?? 8080
const saltRounds = 10

const app = express()
const templateEngine = new TemplateEngine()
app.engine('html', expressThymeleaf(templateEngine))
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

const User = require('./models/user')

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', function (req, res) {
    res.render('login')
})
app.get('/profile', function (req, res) {
    res.render('profile')
})

app.post('/login',  async (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }

    const userRepo = new User()
    const rb = req.body

    let user = await userRepo.findByLogin(rb.login)
    if (!user){
        return res.render('login', {
            errorMsg: 'Login does not found!'
        })
    }

    let comparator = await bcrypt.compareSync(rb.password, user.password)
    if (!comparator) {
        return res.render('login', {
            errorMsg: 'Invalid password!'
        })
    }
    res.redirect('/profile')
})


app.post('/forgot', async (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    const userRepo = new User()
    const rb = req.body

    let user = await userRepo.findByEmail(rb.email)
    if (!user) {
        return res.render('login', {
            errorMsg: 'Login does not found!'
        })
    }

    const newPassword = shortid.generate()
    user.password = await bcrypt.hashSync(newPassword, bcrypt.genSaltSync(saltRounds))
    await userRepo.save(user)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trogalska2208@gmail.com',
            pass: '',
        }
    })

    await transporter.sendMail({
        from: 'trogalska2208@gmail.com',
        to: rb.email,
        subject: 'New password',
        html: `
                <p>Dear user,</p>
                <p>Your new password is: ${newPassword}</p>
                <p>Best regards!</p>`
    })

    res.render('login', {
        errorMsg: 'Success!'
    })
})