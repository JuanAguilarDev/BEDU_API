const {response} = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = (req, res, next) => {
    const {authorization} = req.headers;

    jwt.verify(authorization, 'secretKey', async (error, decoded) => {
        if(error) return res.status(401).json({"msg": "Unauthorized"});
        req.user = await User.findOne({where: {id: decoded.userId}});
        next();
    })
}

module.exports = authenticate;