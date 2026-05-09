const express=require("express")
const app=express()
const port=5000

//API routes HTTP METHODS [GET, POST, PUT/PATCH, DELETE]
app.get('/', (req, res)=> {
    res.send("Server is running")
})
app.get('/about', (req, res)=>{
    res.send('This is our about route')
})

//starting server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})