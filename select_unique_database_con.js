var req = require('./create_connection.js')

req.query("SELECT * FROM employees WHERE id = '2'", function (err, result) {  
    if (err) throw err;  
    console.log(result);  
    });  
     