const router = require('express').Router()
const {
    searchService,
    getServiceCountJan,getServiceCountFeb,
    getServiceCountApril,
    getServiceCountMay,
    getServiceCountAugust,
    getServiceCountMarch,
    getServiceCountJune,
    getServiceCountJuly,
    getServiceCountOctober,
    getServiceCountSeptember,
    getServiceCountNovember,
    getServiceCountDecember} = require('../connection/database_connect')
const {registerService,viewService,searchServiceonCategory,findOneService} = require('../database_controller/serviceController')

const multer = require('multer')
const path = require('path')
var assetStorage = multer.diskStorage({
    destination: './Resources/Images/upload/service/',
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

    router.get('/getServiceCount',getServiceCountJan,getServiceCountFeb,getServiceCountApril,
    getServiceCountAugust,
    getServiceCountMay,
    getServiceCountSeptember,
    getServiceCountMarch,
    getServiceCountJune,
    getServiceCountJuly,
    getServiceCountOctober,
    getServiceCountNovember,
    getServiceCountDecember,(req,res)=>{
        res.send({
            "jan":req.jan,
            "feb":req.feb,
            "march":req.march,
            "april":req.april,
            "may":req.may,
            "june":req.june,
            "july":req.july,
            "august":req.august,
            "october":req.october,
            "september":req.september,
            "november":req.november,
            "december":req.december
        })
    })

    router.post("/sendPic",imageUpload,(req,res)=>{
        res.json(req.file)
    })

    router.post("/addService",registerService,(req,res)=>{
        res.sendStatus(201)
    })
    router.post('/searchServiceonCategory',searchServiceonCategory)

    router.post('/searchService',searchService)
    router.get('/getService',viewService)
    router.post("/findOneService",findOneService)

module.exports = router
