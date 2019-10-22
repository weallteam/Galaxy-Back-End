const router = require('express').Router()
const {addCategory, viewCategory} = require('../database_controller/categoriesController')

const multer = require('multer')
const path = require('path')
var assetStorage = multer.diskStorage({
    destination: './Resources/Images/upload/category',
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, file.fieldname + '-' + Date.now() + ext);
    }
  });
  
  var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
  }
  var upload = multer({
      storage: assetStorage,
      fileFilter: imageFileFilter,
      limits: { fileSize: 10000000 }
  })
  
  var imageUpload = upload.single('imageFile')


router.post('/addCategory',imageUpload,addCategory,(req,res,next)=>{
    res.send(201)
})

router.get('/viewCategory',viewCategory)


module.exports = router