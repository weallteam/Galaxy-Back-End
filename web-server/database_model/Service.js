module.exports = (sequelize, Type) => {
    return sequelize.define('Service', {

        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        providerID:{
          type:Type.INTEGER,
          allowNull:false
        },
        title:{
          type:Type.STRING,
          allowNull:false,
          unique:true
        },
        category:{
          type:Type.STRING,
        },
        description:{
          type:Type.STRING
        },
        price:{
          type:Type.INTEGER
        },
        ImageURL:{
          type:Type.STRING
        },
        gender:{
          type:Type.STRING
        },
        latitude:{
          type:Type.INTEGER
        },
        longitude:{
          type:Type.INTEGER
        },
        start_date:{
          type:Type.DATE
        },
        end_date:{
          type:Type.DATE
        },
        status:{
          type:Type.INTEGER
        },
        createdAt: Type.DATE,
        lastUpdated: Type.DATE,
    },
    
    {
      freezeTableName: true,
    })
}
