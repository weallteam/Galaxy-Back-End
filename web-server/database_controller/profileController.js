const {profile} = require('../connection/database_connect')

const uploadProfile = (req,res,next)=>{
  profile.create({
    url:req.filename,
    userID:req.body.userID
  })
  .then((result)=>{
    next()
  })
  .catch((error)=>{
    res.sendStatus(409)
  })
}

const updateProfileDetail =(req,res,next) =>{
  profile.update(
      { 
          url : req.body.filename
      },
      { where: { userID: req.body.userID } }
  )
  .then((result)=>{
      next()
  })
  .catch((err)=>{
      
      res.sendStatus(409)
  })
}
const findProfile = (req,res,next) =>{
  profile.findOne({
    userID:req.body.userID
  })
  .then((result)=>{
    res.send(result)
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

module.exports = {
  uploadProfile, findProfile
}
