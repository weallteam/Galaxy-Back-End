const jwt = require('jsonwebtoken')

const genToken = (req,res,next)=>{
    jwt.sign({
        username:req.body.username,
        accesslevel:'client'
    },
    process.env.SECRET_KEY_FOR_HASH,
    {
        expiresIn:'1h'
    },
    (err,token) => {
        if(err !=null && undefined){
            console.log(err)
            next({"status":401,
                "message":"Unauthorized token"
        })
        }else{
            req.genToken = token
            next()
        }
    }
    )   
}


const genAdminToken = (req,res,next)=>{
    jwt.sign({
        username:req.body.username,
        accesslevel:'admin'
    },
    process.env.SECRET_KEY_FOR_HASH,
    {
        expiresIn:'1h'
    },
    (err,token) => {
        if(err !=null && undefined){
            console.log(err)
            next({"status":401,
                "message":"Unauthorized token"
        })
        }else{
            req.genToken = token
            next()
        }
    }
    )   
}


const verfiyAdminToken = (req,res,next) => {
    console.log(req.headers.authorization)
    if(req.headers.authorization == undefined){
        res.status(500).send({'message':'no authorization header present'})
        //next({status:500,message:'no authorization header present'})
}
else{
    let token = req.headers.authorization.slice(7,req.headers.authorization.length)

	jwt.verify(token,process.env.SECRET_KEY_FOR_HASH,function(err,decoded){
		console.log(decoded);
		if(err !=null){
            res.sendStatus(500)
			//next({status:500,message:err.message})
		//console.log(err);
		}
		else{
			next();
		}
	})
}

}


const verfiyToken = (req,res,next) => {
    console.log('protect Data')
    console.log(req.headers.authorization)
    if(req.headers.authorization == undefined){
        res.status(500).send({'message':'no authorization header present'})
        //next({status:500,message:'no authorization header present'})
}
else{
    let token = req.headers.authorization.slice(7,req.headers.authorization.length)

	jwt.verify(token,process.env.SECRET_KEY_FOR_HASH,function(err,decoded){
		console.log(decoded);
		if(err !=null){
            res.sendStatus(500)
			//next({status:500,message:err.message})
		//console.log(err);
		}
		else{
			next();
		}
	})
}

}


module.exports = {
    genToken, 
    verfiyToken,
    genAdminToken,
    verfiyAdminToken
}