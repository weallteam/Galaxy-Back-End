module.exports = (sequelize, Type) => {
    return sequelize.define('Categories', {

        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        url:{
          type:Type.STRING,
          allowNull:false,
          unique:true
        },
        title:{
          type:Type.STRING,
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