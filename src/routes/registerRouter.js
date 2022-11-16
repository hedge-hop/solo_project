const express = require('express');

const router = express.Router();

const { renderReg, regUser } = require('../controllers/registerController');

router.get('/', renderReg);
router.post('/', regUser);

module.exports = router;
