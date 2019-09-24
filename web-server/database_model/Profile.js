module.exports = (sequelize, Type) => {
    return sequelize.define('User_Profile', {

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
