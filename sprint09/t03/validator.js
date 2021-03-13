const joi = require('joi');

module.exports.registration = joi.object({
    full_name: joi.string().min(3).required(),
    login: joi.string().min(3).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
    confirm_password: joi.ref('password'),
})

module.exports.login = joi.object({
    login: joi.string().min(3).required(),
    password: joi.string().min(6).required(),
})

module.exports.remindPassword = joi.object({
    email: joi.string().min(6).required().email()
})