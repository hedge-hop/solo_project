const express = require('express');

const router = express.Router();

const renderLogin = require('../controllers/loginController');

router.get('/', renderLogin);

module.exports = router;
