module.exports = (sequelize, Type) => {
    return sequelize.define('User_Provider', {

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
        userID:{
          type:Type.INTEGER,
          allowNull:false,
          unique:true
        }
        createdAt: Type.DATE,
        lastUpdated: Type.DATE,
    },
    {
      freezeTableName: true,
    })
}
