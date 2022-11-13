const router = require('express').Router();

const {
    createGrade,
    updateGrade,
    getGrade,
    deleteGrade
} = require('../controllers/grade');

router.get('/', getGrade);
router.post('/', createGrade);
router.put('/:id', updateGrade);
router.delete('/:id', deleteGrade);

module.exports = router;