const {comment} = require('../connection/database_connect')


const addComment = (req,res,next) =>{
    comment.create({
        serviceID:req.body.serviceID,
        userID:req.body.userID,
        comment:req.body.comment
    })
    .then((result)=>{
        next()
    })
    .catch((error)=>{
        res.send(409)
    })
}


const viewComment = (req,res,next)=>{
    comment.findAll({
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
    addComment, viewComment
}


