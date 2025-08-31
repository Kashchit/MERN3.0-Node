const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, './storage')    // cb = call back , when someone sends files it will save it in storage  , cb(error,success) when error its null
    },
    filename : function (req,file,cb){
        cb(null,"Kashchit-" + file.originalname)        
    }
})

module.exports = {
    multer,
    storage
}