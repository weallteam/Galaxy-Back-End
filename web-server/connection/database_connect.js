const Sequelize = require('sequelize')
require('dotenv').config()
const Usermodel = require('../database_model/User')
const ProfileModel = require('../database_model/Profile')
const ProviderModel = require('../database_model/Provider')
const ServiceModel = require('../database_model/Service')
const CategoryModel = require('../database_model/category')
const CommentModel = require('../database_model/comment')
const book_serviceModel = require('../database_model/book_Service')
const ratingModel = require('../database_model/rating')
const ServicePicModel = require('../database_model/service_pic')
const trackService = require('../database_model/trackService')


console.log(process.env.database_name,process.env.database_user_name,process.env.database_user_password)
const sequelize = new Sequelize(process.env.database_name,process.env.database_user_name,process.env.database_user_password, {
    host: process.env.database_host,
    dialect: 'mysql'
  });


const user = Usermodel(sequelize,Sequelize)
const profile = ProfileModel(sequelize,Sequelize)
const provider = ProviderModel(sequelize,Sequelize)
const service =  ServiceModel(sequelize,Sequelize)
const category = CategoryModel(sequelize,Sequelize)
const comment =CommentModel(sequelize,Sequelize)
const book = book_serviceModel(sequelize,Sequelize)
const rating = ratingModel(sequelize,Sequelize)
const servicePic = ServicePicModel(sequelize,Sequelize)
const track = trackService(sequelize,Sequelize)

sequelize.sync({ force: true })
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
  service,
  category,
  rating,
  servicePic,
  track,
  book,
  comment
}
