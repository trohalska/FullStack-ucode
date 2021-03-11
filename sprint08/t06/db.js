const mysql = require('mysql2')
const configPath = require.resolve('./config.json');
const readConfig = require('read-config')
const config = readConfig(configPath)
const connection = mysql.createConnection(config)

connection.connect(function(err) {
    if (err) throw err
    console.log('Connection is established!')
})

connection.end(function(err) {
    if (err) throw err
    console.log('Connection is closed!')
})


