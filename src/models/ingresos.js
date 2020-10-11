const pool = require('../database');

function queryGetIngresos(req, res) {
    const consulta = `SELECT * FROM operaciones WHERE operacion_tipo = 'Ingreso'`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    })
}

function queryGetIngresoPorCategoria(req, res) {
    const categoria = req.params.categoria;
    const consulta = `SELECT * FROM operaciones WHERE operacion_tipo = 'Ingreso' AND operacion_categoria = ${categoria}`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    })
}


module.exports = { queryGetIngresos, queryGetIngresoPorCategoria};
