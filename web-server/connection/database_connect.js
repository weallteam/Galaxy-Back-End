const Sequelize = require('sequelize')
require('dotenv').config()
const Usermodel = require('../database_model/User')
console.log(process.env.database_name,process.env.database_user_name,process.env.database_user_password)
const sequelize = new Sequelize(process.env.database_name,process.env.database_user_name,process.env.database_user_password, {
    host: process.env.database_host,
    dialect: 'mysql'
  });


const user = Usermodel(sequelize,Sequelize)
sequelize.sync({ force: false })
.then(() => {
  console.log(`Database & tables created!`)
})
.catch(()=>{
    console.log(`Could not create table`)
})

module.exports = {
  user
}