var req = require('./create_connection.js')


var sql = "DROP TABLE employee2";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table deleted");  
});  
