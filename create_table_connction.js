var req  = require('./create_connection.js');


var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
req.query(sql, function (err, result) {  
    if (err) throw err;  
    console.log("Table created");  

});  



     