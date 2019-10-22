const router = require('express').Router()
const {getUserCountJan,getUserCountFeb,
    getUserCountApril,
    getUserCountMay,
    getUserCountAugust,
    getUserCountMarch,
    getUserCountJune,
    getUserCountJuly,
    getUserCountOctober,
    getUserCountSeptember,
    getUserCountNovember,
    getUserCountDecember} = require('../connection/database_connect')

router.get('/getUserCount',getUserCountJan,getUserCountFeb,getUserCountApril,
getUserCountAugust,
getUserCountMay,
getUserCountSeptember,
getUserCountMarch,
getUserCountJune,
getUserCountJuly,
getUserCountOctober,
getUserCountNovember,
getUserCountDecember,(req,res)=>{
    res.send({
        "jan":req.jan,
        "feb":req.feb,
        "march":req.march,
        "april":req.april,
        "may":req.may,
        "june":req.june,
        "july":req.july,
        "august":req.august,
        "october":req.october,
        "september":req.september,
        "november":req.november,
        "december":req.december
    })
})

    module.exports = router