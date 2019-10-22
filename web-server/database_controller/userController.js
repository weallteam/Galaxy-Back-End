const {user} = require('../connection/database_connect')

const registerUser = (req,res,next)=>{
    user.create({
        username:req.body.username,
        password:req.hashpassword,
        email:req.body.email,
        verified:0,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        security_question: req.body.security_question,
        security_answer: req.body.security_answer,
        longitude:req.body.longitude,
        latitude:req.body.latitude
    })
    .then((result)=>{
        console.log('data inserted')})
        next()
    .catch((error)=>{
        console.log('error')
    })
}

const findOneUsername = (req,res,next)=>{
    user
        .findOne({
            where : {username : req.body.username}
        })
        .then((result)=>{
            req.userHashPassword = result.dataValues.password
            req.verified = result.dataValues.verified
            next()
        })
        .catch(()=>{
            res.sendStatus(409)
        })
}

const getOneByID = (req,res,next)=>{
    user
    .findOne({where : {id : req.params.id}})
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.sendStatus(404)
    })
}

const findOneEmail = (req,res,next)=>{
    user
    .findOne({
        where : {email : req.body.email}
    })
    .then((result)=>{
        if(result.dataValues != ''){
            res.status(409).send('Email already exists')
        }
    })
    .catch((error)=>{
        next()
    })
}

const updateUser = (req,res,next) =>{
    user
    .update(
        { 
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            gender:req.body.gender,
            birth_date:req.body.birth_date,
            latitude:req.body.latitude,
            longitude:req.body.longitude,
            verified:1
        },
        { where: { username: req.body.username } }
      )
        .then(result =>{
          if(result){
            console.log('updated')
            res.sendStatus(200)
          }
        } 
        )
        .catch(err =>{
            console.log(err)
            res.sendStatus(500)
        }
          
        )
}


const getVerified = (req,res) =>{
    user
    .findOne({
        where:{username:req.body.username}
    })
    .then((result)=>{
        if(result.dataValues != ""){
            res.status(200).send({verified:result.verified})
        }
    })
    .catch(()=>{
        res.sendStatus(500)
    })
}


module.exports = {
    registerUser,
    findOneUsername,
    getOneByID,
    findOneEmail,
    updateUser,
    getVerified
}
