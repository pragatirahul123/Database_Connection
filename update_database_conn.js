var req = require('./create_connection.js');

// var sql = "UPDATE employees SET city = 'Banglore' WHERE city = 'Nagpur'";  
// req.query(sql,function(err,result){
//     if(err) throw err;
//     console.log(result.affectedRows + " record(s) updated");  
// })




var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";  
var values = [  
[2, 'Bharat Kumar', '25', 'Mumbai'],  
[3, 'John Cena', '35', 'pune'],  
[4, 'Ryan Cook', '15', 'Nanded'  ]
];  
req.query(sql, [values], function (err, result) {  
    if (err) throw err;  
    console.log("Number of records inserted: " + result.affectedRows);  
});  
