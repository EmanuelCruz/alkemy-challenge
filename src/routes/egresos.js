const { Router } = require('express');
const router = Router();

const { getEgresos, getEgresosPorCategoria } = require('../controllers/egresos.controller');

router.route('/')
    .get(getEgresos)

router.route('/:categoria')
    .get(getEgresosPorCategoria)


module.exports = router;
