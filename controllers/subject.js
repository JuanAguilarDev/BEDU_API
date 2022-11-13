const Subject = require('../models/subject');
const User = require('../models/user');
const Group = require('../models/group');

const createSubject = async (req, res) => {
    const body = req.body;
    console.log(body.groupId);
    return await Subject.create(body)
        .then(subject => {
            res.status(201).json({"created": subject});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const getSubject = async (req, res) => {
    const { id } = req.params;
    return await Subject.findOne({
        where: { id }
    })
        .then(subject => {
            res.status(200).json(subject);
        })
        .catch(error => {
            res.status(500).json({ "Error": error.message });
        });
}

const updateSubject = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    return await Subject.update(body, {where: {id}})
        .then(subject => {
            res.status(201).json({"Updated subject with id": subject});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

const deleteSubject = async (req, res) => {
    const id = req.params.id;
    
    return await Subject.destroy({where: {id}})
        .then(subject => {
            res.json({"Deleted subject with id": subject});
        })
        .catch(error => {
            res.status(500).json({"Error": error.message});
        });
}

module.exports = {
    createSubject, 
    getSubject,
    updateSubject,
    deleteSubject
}