var mysql      = require('mysql');
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'tuto',
password : 'tuto',
database : 'tuto_node_grafikart'
});

connection.connect()

module.exports = connection