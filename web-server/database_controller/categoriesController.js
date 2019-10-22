const {category} = require('../connection/database_connect')

const addCategory = (req,res,next) => {
    console.log(req.file.filename)
    category.create({
        url:req.file.filename,
        title:req.body.title
    })
    .then((result)=>{
        next()
    })
    .catch((error)=>{
        res.sendStatus(409)
    })
}


const viewCategory = (req,res,next) =>{
    category.findAll()
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(404)
    })
}

module.exports = {
    addCategory, viewCategory
}
