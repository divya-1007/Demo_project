require('dotenv').config();

const mysql = require('mysql')
const DBConnection = mysql.createConnection({
    port :process.env.DB_PORT,
    localhost :process.env.DB_HOST,
    user :process.env.DB_USER,
    password :process.env.DB_PASSWORD,
    database :process.env.DATABASE
    
})

DBConnection.connect(err =>{
    if(err){
        console.log(err);
    }else{
        console.log("🔌️ Database Connection has been established successfully!");
    }
})

module.exports = DBConnection;