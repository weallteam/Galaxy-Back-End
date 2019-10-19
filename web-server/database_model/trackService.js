module.exports = (sequelize, Type) => {
  return sequelize.define('track_Service', {

      id: {
        type: Type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      serviceID:{
        type:Type.INTEGER,
        allowNull:false,
        unique:true
      },
      userID:{
        type:Type.INTEGER,
        allowNull:false,
        unique:true
      },
      createdAt: Type.DATE,
      lastUpdated: Type.DATE,
  },
  {
    freezeTableName: true,
  })
}
