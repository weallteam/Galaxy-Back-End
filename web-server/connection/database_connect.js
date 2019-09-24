const Sequelize = require('sequelize')
require('dotenv').config()
const Usermodel = require('../database_model/User')
const ProfileModel = require('../database_model/Profile')
const ProviderModel = require('../database_model/Provider')
const ServiceModel = require('../database_model/Service')
console.log(process.env.database_name,process.env.database_user_name,process.env.database_user_password)
const sequelize = new Sequelize(process.env.database_name,process.env.database_user_name,process.env.database_user_password, {
    host: process.env.database_host,
    dialect: 'mysql'
  });


const user = Usermodel(sequelize,Sequelize)
const profile = ProfileModel(sequelize,Sequelize)
const provider = ProviderModel(sequelize,Sequelize)
const service =  ServiceModel(sequelize,Sequelize)



sequelize.sync({ force: false })
.then(() => {
  console.log(`Database & tables created!`)
})
.catch(()=>{
    console.log(`Could not create table`)
})

module.exports = {
  user,
  profile,
  provider,
  service
}
