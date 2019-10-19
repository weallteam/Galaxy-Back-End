const {provider} = require('../connection/database_connect')


const createProvider = (req,res,next)=>{
    provider.create({
        providerID:req.body.providerID,
        userID:req.body.userID
    })
    .then((result)=>{
       next()
    })
    .catch((error)=>{
        res.send(409)
    })
}

const deleteProvider = (req,res,next)=>{
    provider.destroy({
        where:{
            userID:req.body.userID
        }
    }
    )
}


module.exports = {
    createProvider,
    deleteProvider
}