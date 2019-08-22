const router = require('express').Router()

router.post('/login',()=>{
    console.log('login')
})

router.get('/dataLogin',(req,res)=>{
    res.send('Hello login')
})

module.exports = router