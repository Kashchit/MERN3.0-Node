const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.json({
        message: "Hi from kashchit"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message: "This is about page"
    })
})

app.listen(3000, ()=>{
    console.log("Server is running at PORT 3000")
})