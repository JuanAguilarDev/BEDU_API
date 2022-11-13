const router = require('express').Router();
const permission = require('../middlewares/permission');

const {
    createGrade,
    updateGrade,
    getGrade,
    deleteGrade
} = require('../controllers/grade');

router.get('/', getGrade);
router.post('/', permission('teacher'), createGrade);
router.put('/:id', permission('teacher'), updateGrade);
router.delete('/:id', permission('teacher'), deleteGrade);

module.exports = router;