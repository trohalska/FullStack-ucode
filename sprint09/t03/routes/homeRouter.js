const express = require('express')
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const logoutController = require('../controllers/logoutController')
const registrationController = require('../controllers/registrationController')
const homeRouter = express.Router()

homeRouter.get('/', loginController.redirect, homeController.get)
homeRouter.post('/logout', logoutController.post)

homeRouter.get('/login', homeController.redirect, loginController.get)
homeRouter.post('/login', loginController.post)
homeRouter.post('/remind', loginController.remind)

homeRouter.get('/signup', homeController.redirect, registrationController.get)
homeRouter.post('/signup', registrationController.post)

module.exports = homeRouter