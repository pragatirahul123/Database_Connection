var req = require('./create_connection.js')

req.query("SELECT *FROM employees",function(err,result){
    if(err) throw err;
    console.log(result)

})