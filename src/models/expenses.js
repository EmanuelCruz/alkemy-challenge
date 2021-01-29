const pool = require("../database");

function queryGetExpenses(req, res) {
    const query = `SELECT * FROM operaciones WHERE operacion_tipo = 'Egreso'`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
}

function queryGetExpensesByCategory(req, res) {
    const category = req.params.categoria;
    const query = `SELECT * FROM operaciones WHERE operacion_tipo = 'Egreso' AND operacion_categoria = ${category}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

module.exports = { queryGetExpenses, queryGetExpensesByCategory };
