const pool = require('../database');

function queryGetEgresos(req, res) {
    pool.query(`SELECT * FROM operaciones WHERE operacion_tipo = 'Egreso'`, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
}

function queryGetEgresosPorCategoria(req, res) {
    const categoria = req.params.categoria;
    const consulta = `SELECT * FROM operaciones WHERE operacion_tipo = 'Egreso' AND operacion_categoria = ${categoria}`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    })
}

module.exports = { queryGetEgresos, queryGetEgresosPorCategoria};

