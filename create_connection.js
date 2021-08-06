const mysql = require("mysql");

var Connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Pragati@12",
    database : "javapoint"
});


Connection.connect(function(err){
    if(err) throw err;
    console.log("connected")
})



module.exports =Connection ;