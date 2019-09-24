const {service} = require('../connection/database_connect')

const registerService = (req,res,next)=>{
    service.create({
        providerID : req.body.providerID,
        title:req.body.title,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price,
        currency:req.body.currency,
        gender:req.body.gender,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        start_date:req.body.start_date,
        status:req.body.status
    })
    .then((result)=>{
        console.log('service inserted')})
        next()
    .catch((error)=>{
        console.log('error')
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

module.exports = {
    registerService,
    viewService
}