const express = require('express');

const router = express.Router();

const renderAllCats = require('../controllers/categoryController');

router.get('/', renderAllCats);

module.exports = router;
