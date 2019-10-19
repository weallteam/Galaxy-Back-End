const router = require('express').Router()
const multer = require('multer')
const path = require('path')
var assetStorage = multer.diskStorage({
    destination: './Resources/Images/upload',
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


  router.post('/imageUpload',imageUpload,(req,res,next)=>{
    res.json(req.file);
  })

  



module.exports = router