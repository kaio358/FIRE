const mysql = require("mysql")

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 5000,
    user:'root',
    password:'',
    database:''

})
module.exports = conexao