'use strict'

module.exports = class User {
    constructor(login, password, full_name, email) {
        this.login = login
        this.password = password
        this.full_name = full_name
        this.email = email
    }
}