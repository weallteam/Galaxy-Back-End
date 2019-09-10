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
        security_answer: req.body.security_answer
    })
    .then((result)=>{
        console.log('data inserted')})
        next()
    .catch((error)=>{
        console.log('error')
    })
}

module.exports = {
    registerUser
}
