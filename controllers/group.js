const Group = require('../models/group');


const createGroup = async (req, res) => {
    const body = req.body;
    return await Group.create(body)
        .then(group => {
            res.status(201).json({"created": group});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const getGroup = async (req, res) => {
    return await Group.findAndCountAll()
        .then(group => {
            res.status(200).json(group);    
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const updateGroup = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    return await Group.update(body, {where: {id}})
        .then(group => {
            res.status(201).json({"Updated group with id": group});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const deleteGroup = async (req, res) => {
    const id = req.params.id;
    
    return await Group.destroy({where: {id}})
        .then(group => {
            res.json({"Deleted group with id": group});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

module.exports = {
    createGroup, 
    getGroup,
    updateGroup,
    deleteGroup
}