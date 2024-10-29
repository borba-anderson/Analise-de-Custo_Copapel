const express = require('express');
const router = express.Router();
const { getGastos, addGasto } = require('../controllers/gastosController');

router.get('/', getGastos);
router.post('/', addGasto);

module.exports = router;
