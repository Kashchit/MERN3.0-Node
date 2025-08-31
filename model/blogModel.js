const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title :{
        type : String
    },
    subtitle : {
        type : String
    },
    description : {
        type : String 
    },
    image : {
        type : String 
    }
    
})

const Blog = mongoose.model('Blog',blogSchema ) //making table first name of the table i.e blog and the schema 
module.exports = Blog