const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const config = require('./config.json')
const connection = mysql.createConnection(config)

function db_query(user, response) {
    const sql = 'SELECT * FROM users WHERE login=?';

    connection.query(sql, user.login, function (err, rows) {
        if (err) {
            return response.render('./views/login', {
                errorMsg: 'Smth goes wrong! Try later!'
            })
        }
        if (rows[0] === undefined) {
            return response.render('./views/login', {
                errorMsg: 'Login does not exist!'
            })
        } else if (!bcrypt.compareSync(user.password, rows[0].password)) {
            return response.render('./views/login', {
                errorMsg: 'Wrong password!'
            })
        }
        response.render('./views/profile', {
            full_name: rows[0].full_name,
            email: rows[0].email,
            login: rows[0].login,
            user_role: rows[0].user_role
        })
    })
}

module.exports.db_query = db_query