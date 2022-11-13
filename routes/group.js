const router = require('express').Router();

const {
    createGroup, 
    getGroup,
    updateGroup,
    deleteGroup
} = require('../controllers/group');

router.get('/', getGroup);
router.post('/', createGroup);
router.put('/:id', updateGroup);
router.delete('/:id', deleteGroup);

module.exports = router;