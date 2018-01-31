const mysql = require('mysql');

const createDBConnection = () =>
    mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'node-aca-bas'
    });

module.exports = () => createDBConnection;
