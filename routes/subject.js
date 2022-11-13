const router = require('express').Router();
const permission = require('../middlewares/permission')
const {
    createSubject,
    updateSubject,
    getSubject,
    deleteSubject
} = require('../controllers/subject');

router.get('/', getSubject);
router.post('/', permission('admin'), createSubject);
router.put('/:id', permission('admin'), updateSubject);
router.delete('/:id', permission('admin'), deleteSubject);

module.exports = router;