const pool = require("../database");
const {
    queryGetIncome,
    queryGetIncomeByCategory,
} = require("../models/income");
const incomeCtrl = {};

incomeCtrl.getIncome = queryGetIncome;

incomeCtrl.getIncomeByCategory = queryGetIncomeByCategory;

module.exports = incomeCtrl;
