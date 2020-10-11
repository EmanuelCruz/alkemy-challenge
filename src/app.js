const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/operaciones', require('./routes/operaciones'))
app.use('/api/ingresos', require('./routes/ingresos'));
app.use('/api/egresos', require('./routes/egresos'));

module.exports = app;

