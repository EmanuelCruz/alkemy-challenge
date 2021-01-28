const pool = require("../database");

function queryGetOperaciones(req, res) {
    const consulta = "SELECT * FROM operaciones";
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryCreateOperacion(req, res) {
    const { tipo, concepto, monto, fecha, categoria } = req.body;
    const consulta = `INSERT INTO operaciones (operacion_tipo ,operacion_concepto, operacion_monto, operacion_fecha, operacion_categoria) VALUES ('${tipo}','${concepto}', ${monto}, '${fecha}',${categoria})`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json({ respuesta: "Operacion Creada" });
    });
}

function queryGetOperacion(req, res) {
    const id = req.params.id;
    const consulta = `SELECT * FROM operaciones WHERE id_operacion = ${id}`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryDeleteOperacion(req, res) {
    const id = req.params.id;
    const consulta = `DELETE FROM operaciones WHERE id_operacion = ${id}`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json({ respuesta: "Operacion borrada" });
    });
}

function queryUpdateOperacion(req, res) {
    const { concepto, monto, fecha, categoria } = req.body;
    const id = req.params.id;
    const consulta = `UPDATE operaciones SET operacion_concepto = '${concepto}', operacion_monto = ${monto}, operacion_fecha = '${fecha}', operacion_categoria = ${categoria}  WHERE id_operacion = ${id}`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json({ respuesta: "Operacion actualizada" });
    });
}

function queryGetCantOperaciones(req, res) {
    const cant = req.params.cant;
    const consulta = `SELECT * FROM operaciones ORDER BY operacion_fecha DESC LIMIT ${cant}`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryGetBalance(req, res) {
    // const consulta = `SELECT SUM(operacion_monto)-(SELECT SUM(operacion_monto) FROM operaciones WHERE operacion_tipo='egreso') AS balance FROM operaciones WHERE operacion_tipo='ingreso'`;
    const consulta = `  SELECT
                        CASE
                            WHEN SUM(operacion_monto) IS NULL THEN 0
                            ELSE SUM(operacion_monto)
                        END
                        -  (SELECT
                            CASE
                                WHEN SUM(operacion_monto) IS NULL THEN 0
                                ELSE SUM(operacion_monto)
                            END
                            FROM operaciones WHERE operacion_tipo='egreso') AS balance
                        FROM operaciones WHERE operacion_tipo='ingreso'`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryGetPorCategoria(req, res) {
    const categoria = req.params.categoria;
    const consulta = `SELECT * FROM operaciones WHERE operacion_categoria= ${categoria}`;
    pool.query(consulta, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

module.exports = {
    queryGetOperaciones,
    queryCreateOperacion,
    queryGetOperacion,
    queryUpdateOperacion,
    queryDeleteOperacion,
    queryGetCantOperaciones,
    queryGetBalance,
    queryGetPorCategoria,
};
