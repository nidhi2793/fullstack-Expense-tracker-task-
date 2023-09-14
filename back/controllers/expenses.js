// const db = require("../util/database");
const Expense = require("../models/expenseModel");

exports.getAllExpenses = (req, res) => {
  Expense.findAll()
    .then((expenses) => {
      res.json(expenses);
    })
    .catch((err) => {
      console.log(err);
    });
  // const sqlGet = "SELECT * FROM expenses";
  // db.query(sqlGet, (err, result) => {
  //   res.send(result);
  // });
};

exports.addNewExpense = (req, res) => {
  const { title, amount, category } = req.body;
  Expense.create({
    title: title,
    amount: amount,
    category: category,
  })
    .then((result) => {
      console.log("added");
    })
    .catch((err) => {
      console.log(err);
    });

  // const sqlInsert =
  //   "INSERT INTO expenses (title,amount,category) VALUES (?,?,?)";
  // db.query(sqlInsert, [title, amount, category], (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
};

exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  Expense.findByPk(id)
    .then((expense) => {
      return expense.destroy();
    })
    .then((result) => {
      console.log("Expense Deleted");
    })
    .catch((err) => console.log(err));

  // const sqlRemove = "DELETE FROM expenses WHERE id=?";
  // db.query(sqlRemove, id, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
};

exports.getSingleExpense = (req, res) => {
  const { id } = req.params;
  Expense.findByPk(id)
    .then((expense) => {
      console.log(expense.dataValues);
      res.send(expense.dataValues);
    })
    .catch((err) => {
      console.log(err);
    });
  // const sqlGet = "SELECT * FROM expenses where id=?";
  // db.query(sqlGet, id, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.send(result);
  // });
};

exports.editExpense = (req, res) => {
  const { id } = req.params;
  const { title, amount, category } = req.body;
  Expense.update(
    { title: title, amount: amount, category: category },
    { where: { id: id } }
  )
    .then((result) => res.send(result))
    .catch((err) => console.log(err));

  // const sqlUpdate =
  //   "UPDATE expenses SET title=?, amount=?,category=? WHERE id=?";
  // db.query(sqlUpdate, [title, amount, category, id], (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.send(result);
  // });
};
