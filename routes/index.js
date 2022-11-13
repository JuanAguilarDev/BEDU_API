const express = require('express');
const router = express.Router();


// Root
router.get('/', (req, res) => {
    res.json({msg: "Welcome to my API. "});
});


module.exports = router;