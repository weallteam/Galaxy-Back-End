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
const track = trackService(sequelize,Sequelize)

sequelize.sync({ force: false })
.then(() => {
  console.log(`Database & tables created!`)
})
.catch(()=>{
    console.log(`Could not create table`)
})

const searchService = (req,res,next) =>{
  sequelize.query("Select * from `Service` where title like '"+req.body.title+"%';",{type:sequelize.QueryTypes.SELECT})
  .then((results)=>{
    res.send(results)
  })
  .catch((err)=>{
    res.sendStatus(404)
  })
}

const getUserCountJan = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-01-00' and createdAt < '2019-02-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.jan = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const getUserCountFeb = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-02-00' and createdAt < '2019-03-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.feb = results
  console.log(req.feb)
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountMarch = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-03-00' and createdAt < '2019-04-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.march = results
  next()
})
.catch()
}
const getUserCountApril = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-04-00' and createdAt < '2019-05-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.april = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountMay = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-05-00' and createdAt < '2019-06-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.may = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountJune = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-06-00' and createdAt < '2019-07-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.june = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountJuly = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-07-00' and createdAt < '2019-08-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.july = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountAugust = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-08-00' and createdAt < '2019-09-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.august = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getUserCountSeptember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-09-00' and createdAt < '2019-10-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.september = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountOctober = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-10-00' and createdAt < '2019-11-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.october = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountNovember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-11-00' and createdAt < '2019-12-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.november = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getUserCountDecember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `User` Where createdAt >= '2019-12-00' and createdAt < '2020-00-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.december = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}


const getServiceCountJan = (req,res,next) =>{
  sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-01-00' and createdAt < '2019-02-00'",{type: sequelize.QueryTypes.SELECT})
  .then((results)=>{
    req.jan = results
    next()
  })
  .catch((error)=>{
    res.sendStatus(404)
  })
}

const getServiceCountFeb = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-02-00' and createdAt < '2019-03-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.feb = results
  console.log(req.feb)
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getServiceCountMarch = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-03-00' and createdAt < '2019-04-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.march = results
  next()
})
.catch()
}
const getServiceCountApril = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-04-00' and createdAt < '2019-05-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.april = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getServiceCountMay = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-05-00' and createdAt < '2019-06-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.may = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getServiceCountJune = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-06-00' and createdAt < '2019-07-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.june = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getServiceCountJuly = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-07-00' and createdAt < '2019-08-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.july = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getServiceCountAugust = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-08-00' and createdAt < '2019-09-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.august = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}
const getServiceCountSeptember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-09-00' and createdAt < '2019-10-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.september = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getServiceCountOctober = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-10-00' and createdAt < '2019-11-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.october = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getServiceCountNovember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-11-00' and createdAt < '2019-12-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.november = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}

const getServiceCountDecember = (req,res,next) =>{
sequelize.query("Select count(*) as count from `Service` Where createdAt >= '2019-12-00' and createdAt < '2020-00-00'",{type: sequelize.QueryTypes.SELECT})
.then((results)=>{
  req.december = results
  next()
})
.catch((error)=>{
  res.sendStatus(404)
})
}



module.exports = {
  user,
  profile,
  provider,
  service,
  category,
  rating,
  track,
  book,
  comment,
  getUserCountJan,
  getUserCountFeb,
  getUserCountMay,
  getUserCountApril,
  getUserCountAugust,
  getUserCountMarch,
  getUserCountJune,
  getUserCountJuly,
  getUserCountOctober,
  getUserCountSeptember,
  getUserCountNovember,
  getUserCountDecember,
  getServiceCountJan,
  getServiceCountFeb,
  getServiceCountMay,
  getServiceCountApril,
  getServiceCountAugust,
  getServiceCountMarch,
  getServiceCountJune,
  getServiceCountJuly,
  getServiceCountOctober,
  getServiceCountSeptember,
  getServiceCountNovember,
  getServiceCountDecember,
  searchService
}
