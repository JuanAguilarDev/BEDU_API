const router = require('express').Router();
const permission = require('../middlewares/permission');

const {
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/user');


router.get('/', getUser);
router.post('/', permission('admin'), createUser);
router.put('/:id', permission('admin'), updateUser);
router.delete('/:id', permission('admin'), deleteUser);

module.exports = router;