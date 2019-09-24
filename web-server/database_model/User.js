module.exports = (sequelize, Type) => {
    return sequelize.define('User', {

        id: {
          type: Type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username:{
            type:Type.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:Type.STRING,
            allowNull:false,
        },
        firstname:{
            type:Type.STRING,
            allowNull:false
        },
        lastname:{
            type:Type.STRING,
            allowNull:false
        },
        email:{
            type:Type.STRING,
            unique:true,
            validate: {
                isEmail:true
            }
        },
        verified:{
            type:Type.INTEGER,
            allowNull:false
        },
        latitude:{
            type:Type.STRING
        },
        gender:{
          type:TYPE.INTEGER
        },
        date_of_birth:{
          type:TYPE.DATE
        },
        longitude:{
            type:Type.STRING
        },
        security_question:{
            type:Type.STRING,
            allowNull:false
        },
        security_answer:{
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
