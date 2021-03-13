const loginService = require('../services/loginService')
const validator = require('../validator')

module.exports = class RegistrationController {

    static get = async (req, res) => {
        if (typeof req.session.errorMsg === 'undefined') {
            req.session.errorMsg = ''
        }
        await res.render('registration', {
            errorMsg: req.session.errorMsg
        })
    }

    static post = async (req, res) =>  {
        const { error } = validator.registration.validate(req.body)
        if (error) {
            req.session.errorMsg = error.message
            return res.redirect('/signup')
        }
        await loginService.registration(req, res)
    }
0
}