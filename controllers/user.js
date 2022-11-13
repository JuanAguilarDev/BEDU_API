const User = require('../models/user');

const createUser = async (req, res) => {
    const body = req.body;
    return await User.create(body)
        .then(user => {
            res.status(201).json({"created": user});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const getUser = async (req, res) => {
    return await User.findAndCountAll()
        .then(user => {
            res.status(200).json(user);    
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    return await User.update(body, {where: {id}})
        .then(user => {
            res.status(201).json({"Updated user with id": user});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    
    return await User.destroy({where: {id}})
        .then(user => {
            res.json({"Deleted user with id": user});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

module.exports = {
    createUser, 
    getUser,
    updateUser,
    deleteUser
}