const express = require('express')
const app = express()

// to parse json object into javascript object
const bodyParser = require('body-parser')

// using dotenv for env file
require('dotenv').config()
const login = require('./routes/login')

// this is the access control
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})

// setting up static view directory
var publicDir = require('path').join(__dirname, '/Resources');
app.use(express.static(publicDir)); 

//uses boby-parse to parse json object
app.use(bodyParser.json())

app.use('/user',login)

app.listen(process.env.port,()=>{
    console.log('server started')
})

// for testing purpose only
module.exports = app

