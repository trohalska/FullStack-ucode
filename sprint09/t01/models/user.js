'use strict'

const mysql = require('../db')
const Model = require('../model')

module.exports = class User extends Model {
    constructor(login, password, full_name, email) {
        super()
        this.login = login
        this.password = password
        this.full_name = full_name
        this.email = email
    }
    request(response) {
        mysql.db_query({login: this.login, password:  this.password}, response)
    }
}