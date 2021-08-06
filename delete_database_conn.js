var req = require('./create_connection.js')

var sql = "DELETE FROM employees WHERE city = 'Banglore'"
req.query(sql,function(err,result){
    if (err)  throw err;
    console.log("number of record deleted:" + result.affectedRows)
})