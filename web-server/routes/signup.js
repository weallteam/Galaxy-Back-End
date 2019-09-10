const router = require('express').Router()
const {registerUser} = require('../database_controller/userController')
const {generateHash} = require('../hash/hash')
router.post('/signup',generateHash,registerUser,(req,res)=>{
    res.sendStatus(200)
})

module.exports = router