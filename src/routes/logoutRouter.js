const express = require('express');

const router = express.Router();

const { logout } = require('../controllers/logoutControllers');

router.get('/', logout);

module.exports = router;
