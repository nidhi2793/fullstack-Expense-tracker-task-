const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = require("./util/database");
const expenseRoutes = require("./routes/expense_routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", expenseRoutes);

app.listen(5000, () => {
  console.log("server listening to port 5000");
});
