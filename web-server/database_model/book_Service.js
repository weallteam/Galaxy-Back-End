module.exports = (sequelize, Type) => {
    return sequelize.define('book_service', {

        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userID:{
          type:Type.INTEGER,
          allowNull:false
        },
        serviceID:{
          type:Type.INTEGER,
          allowNull:false,
          unique:true
        },
        status:{
            type:Type.INTEGER,
            allowNull:false
        },
        createdAt: Type.DATE,
        lastUpdated: Type.DATE,
    },
    {
      freezeTableName: true,
    })
}