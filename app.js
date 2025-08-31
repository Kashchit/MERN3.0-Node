require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')

const app = express()
app.use(express.json())

connectToDatabase()

app.get("/",(req,res)=>{
    res.status(202).json({
        message: "Hi from kashchit"
    })
})

app.post("/blog",async (req,res)=>{
    // const title = req.body.title 
    // const subtitle = req.body.subtitle
    // const description = req.body.description
    // const image = req.body.image

    const {title, subtitle, description, image} = req.body
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : image
    })

    res.status(200).json({
        message : "Blog API hit successfully"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running at PORT 3000")
})

// mongodb+srv://thapakashchitbikram_db_user:<db_password>@cluster0.k8mxuys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0