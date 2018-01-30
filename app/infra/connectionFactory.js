const mysql = require('mysql');

const createDBConnection = () =>
    mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'node-aca-bas'
    });

module.exports = () => createDBConnection;
