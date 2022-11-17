const express = require('express');

const router = express.Router();

const renderAllPostures = require('../controllers/allPosController');

router.get('/', renderAllPostures);

module.exports = router;
