const {user} = require('../connection/database_connect')

const uploadProfile = (req,res)=>{
  user.create({
    url:req.filename,
    userID:req.body.userID
  })
  .then((result)=>{

  })
  .catch((error)=>{
    
  })
}
