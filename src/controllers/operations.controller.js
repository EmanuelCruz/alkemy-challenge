const pool = require("../database");
const {
    queryGetOperations,
    queryCreateOperation,
    queryGetOperation,
    queryUpdateOperation,
    queryDeleteOperation,
    queryGetQuantityOperations,
    queryGetBalance,
    queryGetByCategory,
} = require("../models/operations");
const operationsCtrl = {};

operationsCtrl.getOperations = queryGetOperations;
operationsCtrl.createOperation = queryCreateOperation;

operationsCtrl.getOperation = queryGetOperation;
operationsCtrl.updateOperation = queryUpdateOperation;
operationsCtrl.deleteOperation = queryDeleteOperation;

// Listar x cant operaciones
operationsCtrl.getQuantityOperations = queryGetQuantityOperations;

//balance
operationsCtrl.getBalance = queryGetBalance;

//categoria
operationsCtrl.getByCategory = queryGetByCategory;

module.exports = operationsCtrl;
