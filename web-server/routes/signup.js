const router = require('express').Router()
const {registerUser} = require('../database_controller/userController')
router.post('/signup',registerUser,(req,res)=>{
    res.sendStatus(200)
})

module.exports = router