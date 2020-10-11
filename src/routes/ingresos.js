const { Router } = require('express');
const router = Router();

const { getIngresos, getIngresosPorCategoria } = require('../controllers/ingresos.controller');

router.route('/')
    .get(getIngresos)

router.route('/:categoria')
    .get(getIngresosPorCategoria)


module.exports = router;