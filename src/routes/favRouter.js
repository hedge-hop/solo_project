const express = require('express');

const router = express.Router();

const { addtoFav, deleteFav } = require('../controllers/favController');

router.post('/:id', addtoFav);
router.delete('/:id', deleteFav);

module.exports = router;
