const router = require('express').Router();
const permission = require('../middlewares/permission');

const {
    createGroup, 
    getGroup,
    updateGroup,
    deleteGroup
} = require('../controllers/group');

router.get('/', getGroup);
router.post('/', permission('admin'), createGroup);
router.put('/:id', permission('admin'), updateGroup);
router.delete('/:id', permission('admin'), deleteGroup);

module.exports = router;