const express = require("express");
const router = express.Router();
const db = require("../util/database");
const expenseController = require("../controllers/expenses");

router.get("/get/:id", expenseController.getSingleExpense);

router.get("/get", expenseController.getAllExpenses);

router.post("/post", expenseController.addNewExpense);

router.put("/update/:id", expenseController.editExpense);

router.delete("/remove/:id", expenseController.deleteExpense);

module.exports = router;
