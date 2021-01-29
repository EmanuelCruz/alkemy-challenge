const express = require("express");
const cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/operations", require("./routes/operations"));
app.use("/api/income", require("./routes/income"));
app.use("/api/expenses", require("./routes/expenses"));

module.exports = app;
