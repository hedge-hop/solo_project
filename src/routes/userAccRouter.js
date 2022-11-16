const express = require('express');

const router = express.Router();

const renderUserAcc = require('../controllers/userAccController');

router.get('/', renderUserAcc);

module.exports = router;
