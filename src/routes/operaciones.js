const { Router } = require('express');
const router = Router();

const { getOperaciones, createOperacion, getOperacion, updateOperacion, deleteOperacion, getCantOperaciones, getBalance, getPorCategoria } = require('../controllers/operaciones.controller');

router.route('/')
    .get(getOperaciones)
    .post(createOperacion)

router.route('/recientes/:cant')
    .get(getCantOperaciones)

router.route('/balance')
    .get(getBalance)

router.route('/:id')
    .get(getOperacion)
    .put(updateOperacion)
    .delete(deleteOperacion)

router.route('/categoria/:categoria')
    .get(getPorCategoria)

module.exports = router;