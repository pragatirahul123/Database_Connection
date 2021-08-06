const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(express.json())
const port = 3079

var Connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Pragati@12",
    database : "practice"
});

app.get('/',(req,res)=>{
    // res.send('crud operation using ')
    let sql  = "SELECT * FROM users";
    if(err) throw err;
    
})

app.listen(3000,()=>{
    console.log("server is running")
})

