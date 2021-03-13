'use strict'

const mysql = require('../db')
const Model = require('../model')

module.exports = class User extends Model {
    constructor(login, password, full_name, email, user_role = 'user') {
        super()
        this.login = login
        this.password = password
        this.full_name = full_name
        this.email = email
        this.user_role = user_role
    }
    request(response) {
        let user = {
            login: this.login,
            password: this.password,
            full_name: this.full_name,
            email: this.email,
            user_role: this.user_role
        }
        mysql.db_query(user, response)
    }
}