const pool = require("../database");

function queryGetIncome(req, res) {
    const query = `SELECT * FROM operaciones WHERE operacion_tipo = 'Ingreso'`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryGetIncomeByCategory(req, res) {
    const category = req.params.categoria;
    const query = `SELECT * FROM operaciones WHERE operacion_tipo = 'Ingreso' AND operacion_categoria = ${category}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

module.exports = { queryGetIncome, queryGetIncomeByCategory };
