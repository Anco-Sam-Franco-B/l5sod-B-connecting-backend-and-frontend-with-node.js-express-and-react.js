const express=require("express")
const cors=require('cors')
const app=express()
const port=5000
const con=require('./Database')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


//API ROUTES
app.get("/users", (req, res)=>{
    con.query('SELECT * FROM uses', (err, data)=>{
        if(err) return res.status(500).json({
                message: 'Internal Server Error',
                errorMessage: err.message
            })
        return res.status(200).json({
            message: 'User Fetched',
            result: data
        })
    })
})

app.post('/create-user', (req, res)=>{
    const { fname, lname, email, phone } = req.body
    if(!fname || !lname || !email || !phone){
        return res.status(400).json({
            message: 'All inputs are required!'
        })
    }
    //insert new user to database table
    con.query(`INSERT INTO users(fname, lname, email, phone) VALUES('${fname}', '${lname}', '${email}', '${phone}')`, (err)=>{
        if(err){
            return res.status(500).json({
                message: 'Internal Server Error',
                errorMessage: err.message
            })
        }
        return res.status(201).json({
            message: 'User Created Succcessfully!'
        })
    })
})


//starting server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
