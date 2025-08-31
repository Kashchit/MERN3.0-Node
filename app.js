require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')

const app = express()
app.use(express.json())
const {multer, storage} = require('./middleware/multerConfig')
const upload = multer({storage : storage})

connectToDatabase()

app.get("/",(req,res)=>{
    res.status(202).json({
        message: "Hi from kashchit"
    })
})

app.post("/blog",upload.single('image'),async (req,res)=>{    //same name should be given i.e image when using upload.single('image')
    // const title = req.body.title 
    // const subtitle = req.body.subtitle
    // const description = req.body.description
    // const image = req.body.image

    // const {title, subtitle, description, image} = req.body

    // if(!title || !subtitle || !description || !image){          //validating the information
    //     return res.status(400).json({
    //         message : "Please provide all the information"
    //     })
    // }
    // await Blog.create({
    //     title : title,
    //     subtitle : subtitle,
    //     description : description,
    //     image : image
    // })
    console.log(req.body)

    res.status(200).json({
        message : "Blog API hit successfully"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running at PORT 3000")
})

// mongodb+srv://thapakashchitbikram_db_user:<db_password>@cluster0.k8mxuys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0