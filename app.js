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
    const {title, subtitle, description} = req.body
    const filename = req.file.filename

    // if(!title || !subtitle || !description){          //validating the information
    //     return res.status(400).json({
    //         message : "Please provide all the information"
    //     })
    // }

    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : filename
    })

    res.status(200).json({
        message : "Blog API hit successfully"
    })
})

app.get("/blog",async (req,res)=>{
    const blogs = await Blog.find()   //returns array
    res.status(200).json({
        message : "blogs fetched successfully",
        data : blogs
    })
})

app.get("/blog/:id",async (req,res)=>{    //get single blog
    const id = req.params.id
    const blog = await Blog.findById(id)   //returns object
    if(!blog){
        return res.status(404).json({
            message : "No data found"
        })
    }
    res.status(200).json({
        message : "Fetched succesfully",
        data : blog
    })
})

app.delete("/blog/:id", async(req,res)=>{
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.status(200).json({
        message : "Blog deleted successfully"
    })
})



app.use(express.static('./storage'))        //giving permission to see the files from stroage 

app.listen(process.env.PORT, ()=>{
    console.log("Server is running at PORT 3000")
})

// mongodb+srv://thapakashchitbikram_db_user:<db_password>@cluster0.k8mxuys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0