module.exports = (sequelize, Type) => {
    return sequelize.define('comment', {

        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        serviceID:{
          type:Type.INTEGER,
          allowNull:false
        },
        userID:{
          type:Type.INTEGER,
          allowNull:false
        },
        comment:{
            type:Type.STRING
        },
        createdAt: Type.DATE,
        lastUpdated: Type.DATE,
    },
    {
      freezeTableName: true,
    })
}