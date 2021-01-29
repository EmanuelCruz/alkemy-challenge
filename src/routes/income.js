const { Router } = require('express');
const router = Router();

const { getIncome, getIncomeByCategory } = require('../controllers/income.controller');

router.route('/')
    .get(getIncome)

router.route('/:category')
    .get(getIncomeByCategory)


module.exports = router;