const {rating} = require('../connection/database_connect')


const addRating = (req,res,next) =>{
    rating.create({
        serviceID:req.body.serviceID,
        userID:req.body.userID,
        rate_value:req.body.rate_value
    })
    .then((result)=>{
        next()
    })
    .catch((error)=>{
        res.send(409)
    })
}


const viewRating = (req,res,next)=>{
    rating.findAll({
        where:{
            serviceID : req.body.serviceID
        }
    })
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(409)
    })
}


module.exports = {
    addRating, viewRating
}


