const pool = require("../database");

function queryGetExpenses(req, res) {
    const query = `SELECT * FROM operaciones WHERE operacion_tipo = 'expenses'`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
}

function queryGetExpensesByCategory(req, res) {
    const category = req.params.category;
    const query = `SELECT * FROM operaciones WHERE operacion_tipo = 'expenses' AND operacion_categoria = ${category}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

module.exports = { queryGetExpenses, queryGetExpensesByCategory };
