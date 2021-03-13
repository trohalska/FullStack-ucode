const express = require('express')
const userController = require('../controllers/logoutController.js')
const userRouter = express.Router()

// userRouter.use('/create', userController.addUser)
// userRouter.use('/', userController.getUsers)

module.exports = userRouter