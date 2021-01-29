const { Router } = require("express");
const router = Router();

const {
    getExpenses,
    getExpensesByCategory,
} = require("../controllers/expenses.controller");

router.route("/").get(getExpenses);

router.route("/:category").get(getExpensesByCategory);

module.exports = router;
