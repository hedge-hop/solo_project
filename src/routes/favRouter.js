const express = require('express');

const router = express.Router();

const { addtoFav } = require('../controllers/favController');

router.post('/:id', addtoFav);
// router.post('/', postLogin);

module.exports = router;
