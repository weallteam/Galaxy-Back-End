module.exports = (sequelize, Type) => {
    return sequelize.define('Service', {

        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        providerID:{
          type:Type.INTEGER,
          allowNull:false,
          unique:true
        },
        title:{
          type:Type.STRING,
          allowNull:false,
          unique:true
        },
        category:{
          type:Type.INTEGER,
        },
        description:{
          type:Type.STRING
        },
        price:{
          type:TYPE.INTEGER
        },
        currency:{
          type:TYPE.STRING
        },
        gender:{
          type:TYPE.INTEGER
        },
        latitude:{
          type:TYPE.INTEGER
        },
        longitude:{
          type:TYPE.INTEGER
        },
        start_date:{
          type:TYPE.DATE
        },
        end_date:{
          type:Type.DATE
        },
        status:{
          type:TYPE.INTEGER
        }
        createdAt: Type.DATE,
        lastUpdated: Type.DATE,
    },
    {
      freezeTableName: true,
    })
}
