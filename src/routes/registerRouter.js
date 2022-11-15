const express = require('express');

const router = express.Router();

const renderReg = require('../controllers/registerController');

router.get('/', renderReg);

module.exports = router;
