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

app.post('/create', (req, res)=>{
    res.status(201).json({
        message: 'Item Created!'
    })
})
app.put('/update/:item_id', (req, res)=>{
    const {item_id}=req.params
    res.status(200).json({
        message: `items updated with this ${item_id}`
    })
})

//starting server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
