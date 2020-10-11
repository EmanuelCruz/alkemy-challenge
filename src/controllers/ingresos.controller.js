const pool = require('../database');
const { queryGetIngresos, queryGetIngresoPorCategoria} = require('../models/ingresos');
const ingresosCtrl = {};

ingresosCtrl.getIngresos = queryGetIngresos;

ingresosCtrl.getIngresosPorCategoria = queryGetIngresoPorCategoria;


module.exports = ingresosCtrl;