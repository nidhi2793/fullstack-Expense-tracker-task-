const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenses");

router.get("/get/:id", expenseController.getSingleExpense);

router.get("/getall", expenseController.getAllExpenses);

router.post("/post", expenseController.addNewExpense);

router.put("/update/:id", expenseController.editExpense);

router.delete("/remove/:id", expenseController.deleteExpense);

module.exports = router;
