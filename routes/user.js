const router = require('express').Router();

const {
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/user');


router.get('/', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;