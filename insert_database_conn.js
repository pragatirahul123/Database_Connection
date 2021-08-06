var req  = require('./create_connection.js');


var sql = "INSERT INTO employees (id, name, age, city) VALUES (1, 'Mona Rahul', 23, 'Nagpur')";   
req.query(sql, function (err, result) {  
    if (err) throw err
    console.log("1 record inserted");   

    
});  