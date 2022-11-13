const express = require('express');
const router = express.Router();

// Authentication
const authenticate = require('../middlewares/authentication');

// Routes
const grade = require('./grade');
const subject = require('./subject');
const group = require('./group');
const user = require('./user');
const auth = require('./auth');

// Root
router.get('/', (req, res) => {
    res.json({msg: "Welcome to my API. "});
});

router.use('/grade', authenticate, grade);
router.use('/subject', authenticate, subject);
router.use('/group', authenticate, group);
router.use('/user', authenticate, user);
router.use('/auth', auth);


module.exports = router;