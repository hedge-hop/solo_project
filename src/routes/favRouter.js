const express = require('express');

const router = express.Router();

const { addtoFav } = require('../controllers/favController');

router.post('/:id', addtoFav);

module.exports = router;
