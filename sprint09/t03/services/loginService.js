const bcrypt = require('bcrypt')
const shortid = require('shortid')
const nodemailer = require('nodemailer')
const UserRepository = require('../repository/userRepository')
const User = require('../models/user')
const saltRounds = 10

module.exports = class LoginService {

    static login = async (req, res) => {
        const userRepo = new UserRepository()
        const rb = req.body
        const ss = req.session

        let user = await userRepo.findByLogin(rb.login)
        if (!user){
            ss.errorMsg = 'Login is not found!'
            return res.redirect('/login')
        }

        let comparator = await bcrypt.compareSync(rb.password, user.password)
        if (!comparator) {
            ss.errorMsg = 'Invalid password!'
            return res.redirect('/login')
        }

        ss.errorMsg = ''
        ss.authUser = req.body.login
        res.redirect('/')
    }

    static registration = async (req, res) => {
        const userRepo = new UserRepository()
        const rb = req.body
        const ss = req.session

        if (rb.password !== rb.confirm_password) {
            ss.errorMsg = 'Password and Compare password do not match!'
            return res.redirect('/signup')
        } else if (await userRepo.findByEmail(rb.email)){
            ss.errorMsg = 'Email is already exist!'
            return res.redirect('/signup')
        } else if (await userRepo.findByLogin(rb.login)) {
            ss.errorMsg = 'Login is already exist!'
            return res.redirect('/signup')
        }

        let hash = bcrypt.hashSync(rb.password, bcrypt.genSaltSync(saltRounds))
        let user = new User(rb.login, hash, rb.full_name, rb.email)

        await userRepo.save(user)

        req.session.errorMsg = ''
        res.redirect('/login')
    }

    static remindPassword = async (req, res) => {
        const userRepo = new UserRepository()
        const rb = req.body
        const ss = req.session

        let user = await userRepo.findByEmail(rb.email)
        if (!user){
            ss.errorMsg = 'Login is not found!'
            return res.redirect('/login')
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

        ss.errorMsg = 'Success! Email with new password was send.'
        res.redirect('/login')
    }

}