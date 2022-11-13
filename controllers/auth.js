const User = require('../models/users');
const jwt = require('jsonwebtoken');

const logIn = async (req, res) => {
    const {body} = req;
    const user = await User.findOne({
        where: {email: body.email}
    });
    // validate password
    if(!user) return res.status(401).json({"msg": "Unauthorized"});
    if(!user.validPassword(body.password)) return res.status(401).json({"msg": "invalid credentials. "})

    // Generar token
    const token = jwt.sign({userId: user.id}, 'secretKey', {
        expiresIn: 3600
    });

    return res.json({"msg": "Authenticated successfully! ", token});
}

const signUp = async (req, res) => {
    let {body} = req;
    const user = await User.findOne({
        where: {email: body.email}
    });

    if(user){
        return res.status(400).json({"msg": "User has been already created!"});
    }else{
        await User.create(body)
        .then(data => {
            res.json({"msg": "User has been created. ", data});
        }) 
        .catch(error => {
            res.json({"Error": error.message});
        })
    }

   
}

module.exports = {
    logIn,
    signUp
}
