const mysql=require('mysql2')
const con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sms'
})

//check
con.connect((err)=>{
    if(err){
        return console.log('Database connection Failed', err)
    }
    return console.log("Database connected!")
})

module.exports=con