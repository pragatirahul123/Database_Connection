var req  = require('./create_connection.js');


req.query("CREATE DATABASE javapoint",function(err,result){
   if(err)   throw err,
    console.log("Databases created")

})