const loginService = require('../services/loginService')
const validator = require('../validator')

module.exports = class LoginController {

    static redirect = async (req, res, next) => {
        if (!req.session.authUser) {
            res.redirect('/login')
        } else {
            await next()
        }
    }

    static get = async (req, res) => {
        if (typeof req.session.errorMsg === 'undefined') {
            req.session.errorMsg = ''
        }
        await res.render('login', {
            errorMsg: req.session.errorMsg
        })
    }

    static post = async (req, res) =>  {
        const { error } = validator.login.validate(req.body)
        if (error) {
            req.session.errorMsg = error.message
            return res.redirect('/login')
        }
        await loginService.login(req, res)
    }

    static remind = async (req, res) => {
        const { error } = validator.remindPassword.validate(req.body)
        if (error) {
            req.session.remindErr = error.message
            return res.redirect('/login')
        }
        await loginService.remindPassword(req, res)
    }

}