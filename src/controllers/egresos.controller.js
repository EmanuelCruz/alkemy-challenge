const {queryGetEgresos, queryGetEgresosPorCategoria} = require('../models/egresos')
const egresosCtrl = {};

egresosCtrl.getEgresos = queryGetEgresos;

egresosCtrl.getEgresosPorCategoria = queryGetEgresosPorCategoria


module.exports = egresosCtrl;