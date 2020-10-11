const pool = require('../database');
const { queryGetOperaciones, queryCreateOperacion, queryGetOperacion, queryUpdateOperacion, queryDeleteOperacion, queryGetCantOperaciones, queryGetBalance, queryGetPorCategoria } = require('../models/operaciones');
const operacionesCtrl = {};

operacionesCtrl.getOperaciones = queryGetOperaciones;
operacionesCtrl.createOperacion = queryCreateOperacion;

operacionesCtrl.getOperacion = queryGetOperacion;
operacionesCtrl.updateOperacion = queryUpdateOperacion;
operacionesCtrl.deleteOperacion = queryDeleteOperacion;

// Listar x cant operaciones
operacionesCtrl.getCantOperaciones = queryGetCantOperaciones;

//balance
operacionesCtrl.getBalance = queryGetBalance;

//categoria
operacionesCtrl.getPorCategoria = queryGetPorCategoria;

module.exports = operacionesCtrl;