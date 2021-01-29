const pool = require("../database");

function queryGetOperations(req, res) {
    const query = "SELECT * FROM operaciones";
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryCreateOperation(req, res) {
    const { tipo, concepto, monto, fecha, categoria } = req.body;
    const query = `INSERT INTO operaciones (operacion_tipo ,operacion_concepto, operacion_monto, operacion_fecha, operacion_categoria) VALUES ('${tipo}','${concepto}', ${monto}, '${fecha}',${categoria})`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json({ respuesta: "Operation created" });
    });
}

function queryGetOperation(req, res) {
    const id = req.params.id;
    const query = `SELECT * FROM operaciones WHERE id_operacion = ${id}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryDeleteOperation(req, res) {
    const id = req.params.id;
    const query = `DELETE FROM operaciones WHERE id_operacion = ${id}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json({ respuesta: "Operation deleted" });
    });
}

function queryUpdateOperation(req, res) {
    const { concepto, monto, fecha, categoria } = req.body;
    const id = req.params.id;
    const query = `UPDATE operaciones SET operacion_concepto = '${concepto}', operacion_monto = ${monto}, operacion_fecha = '${fecha}', operacion_categoria = ${categoria}  WHERE id_operacion = ${id}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json({ respuesta: "Updated operation" });
    });
}

function queryGetQuantityOperations(req, res) {
    const quantity = req.params.quantity;
    const query = `SELECT * FROM operaciones ORDER BY operacion_fecha DESC LIMIT ${quantity}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryGetBalance(req, res) {
    const query = `  SELECT
                        CASE
                            WHEN SUM(operacion_monto) IS NULL THEN 0
                            ELSE SUM(operacion_monto)
                        END
                        -  (SELECT
                            CASE
                                WHEN SUM(operacion_monto) IS NULL THEN 0
                                ELSE SUM(operacion_monto)
                            END
                            FROM operaciones WHERE operacion_tipo='expenses') AS balance
                        FROM operaciones WHERE operacion_tipo='income'`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

function queryGetByCategory(req, res) {
    const category = req.params.category;
    const query = `SELECT * FROM operaciones WHERE operacion_categoria= ${category}`;
    pool.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
}

module.exports = {
    queryGetOperations,
    queryCreateOperation,
    queryGetOperation,
    queryUpdateOperation,
    queryDeleteOperation,
    queryGetQuantityOperations,
    queryGetBalance,
    queryGetByCategory,
};
