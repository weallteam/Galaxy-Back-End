const router = require('express').Router()
const {addBook, viewBook} = require('../database_controller/bookController')
router.post("/addBook",addBook,(req,res,next)=>{
    res.sendStatus(201)
})
router.post("/viewBook",viewBook)

module.exports = router