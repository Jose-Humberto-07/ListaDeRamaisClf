const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ramais"
});

connection.connect((erro) => {
    if (erro) {
        console.log("ERRO: conexão não foi realizada", erro);
        return
    } else {
        console.log("Conexão realizada com sucesso");
    }
});

module.exports = connection;