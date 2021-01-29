const {
    queryGetExpenses,
    queryGetExpensesByCategory,
} = require("../models/expenses");
const expensesCtrl = {};

expensesCtrl.getExpenses = queryGetExpenses;

expensesCtrl.getExpensesByCategory = queryGetExpensesByCategory;

module.exports = expensesCtrl;
