require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()

connectToDatabase()

app.get("/",(req,res)=>{
    res.status(202).json({
        message: "Hi from kashchit"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message: "This is about page"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running at PORT 3000")
})

// mongodb+srv://thapakashchitbikram_db_user:<db_password>@cluster0.k8mxuys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0