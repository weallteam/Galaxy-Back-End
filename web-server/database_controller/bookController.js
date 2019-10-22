const {book} = require('../connection/database_connect')



const addBook = (req,res,next)=>{
    book.create({
        userID:req.body.userID,
        serviceID:req.body.serviceID,
        status:req.body.status
    })
    .then((result)=>{
        next()
    })
    .catch((err)=>{
        console.log(errr)
        res.sendStatus(409)
    })
}

const viewBook = (req,res)=>{
    book.findAll({
        where:{
            userID : req.body.userID
        }
    })
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.sendStatus(404)
    })
} 


module.exports = {
    addBook, viewBook
}