const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
const expenseRoutes = require("./routes/expense_routes");
const expenseModel = require("./models/expenseModel");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", expenseRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
