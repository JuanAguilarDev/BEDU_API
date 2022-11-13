const router = require('express').Router();

const {
    createSubject,
    updateSubject,
    getSubject,
    deleteSubject
} = require('../controllers/subject');

router.get('/', getSubject);
router.post('/', createSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

module.exports = router;