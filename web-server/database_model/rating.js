module.exports = (sequelize, Type) => {
    return sequelize.define('rating', {

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
          allowNull:false,
          unique:true
        },
        rate_value:{
            type:Type.INTEGER
        },
        createdAt: Type.DATE,
        lastUpdated: Type.DATE,
    },
    {
      freezeTableName: true,
    })
}