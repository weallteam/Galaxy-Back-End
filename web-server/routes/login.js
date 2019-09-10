const router = require('express').Router()
const {genToken} = require('../auth/token')
const {compareHash} = require('../hash/hash')
const {findOneUsername} = require('../database_controller/userController')

router.post('/login',findOneUsername,compareHash,genToken,(req,res)=>{
    res.status(202).send({
        'message':'Logged In Successfully',
        'token':req.genToken,
        'verified':req.verified
    })
})


module.exports = router