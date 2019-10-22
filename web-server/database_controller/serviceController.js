const {service} = require('../connection/database_connect')

const registerService = (req,res,next)=>{
    console.log(req.body)
    service.create({
        providerID : 1,
        title:req.body.title,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price,
        currency:req.body.currency,
        gender:req.body.gender,
        ImageURL:req.body.ImageURL,
        start_date:req.body.start_date,
        status:1
    })
    .then((result)=>{
        console.log(result)
        next()
    })
        
    .catch((error)=>{
        console.log(error)
        res.sendStatus(409)
    })
}

const viewService = (req,res,next) =>{
    service.findAll()
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{

    })
}

const findOneService = (req,res,next) =>{
    service.findOne({
        where : {
            id : req.body.id
        }
    })
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.sendStatus(404)
    })
}


const searchServiceonCategory = (req,res,next) =>{
    service.findAll({
        where : {
            category : req.body.category
        }
    })
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(404)
    })
}

module.exports = {
    registerService,
    viewService,
    searchServiceonCategory,
    findOneService
}