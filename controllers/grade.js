const Grade = require('../models/grade');

const createGrade = async (req, res) => {
    const body = req.body;
    return await Grade.create(body)
        .then(grade => {
            res.status(201).json({ "created": grade });
        })
        .catch(error => {
            res.status(500).json({ "Error": error.message });
        });
}

const getGrade = async (req, res) => {
    return await Grade.findAndCountAll()
        .then(grade => {
            res.status(200).json(grade);
        })
        .catch(error => {
            res.status(500).json({ "Error": error.message });
        });
}

const updateGrade = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    return await Grade.update(body, { where: { id } })
        .then(grade => {
            res.status(201).json({ "Updated grade with id": grade });
        })
        .catch(error => {
            res.status(500).json({ "Error": error.message });
        });
}

const deleteGrade = async (req, res) => {
    const id = req.params.id;

    return await Grade.destroy({ where: { id } })
        .then(grade => {
            res.json({ "Deleted grade with id": grade });
        })
        .catch(error => {
            res.status(500).json({ "Error": error.message });
        });
}

module.exports = {
    createGrade,
    getGrade,
    updateGrade,
    deleteGrade
}