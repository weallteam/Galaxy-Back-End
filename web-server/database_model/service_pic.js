module.exports = (sequelize, Type) => {
  return sequelize.define('Service_Pic', {

      id: {
        type: Type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      serviceID:{
        type:Type.INTEGER,
        allowNull:false
      },
      picURL:{
        type:Type.STRING,
        allowNull:false
      },
      videoURL:{
        type:Type.STRING,
        allowNull:false
      },
      createdAt: Type.DATE,
      lastUpdated: Type.DATE,
  },
  {
    freezeTableName: true,
  })
}
