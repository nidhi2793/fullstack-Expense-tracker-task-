const db = require("../util/database");

exports.getAllExpenses = (req, res) => {
  const sqlGet = "SELECT * FROM expenses";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
};

exports.addNewExpense = (req, res) => {
  const { title, amount, category } = req.body;
  const sqlInsert =
    "INSERT INTO expenses (title,amount,category) VALUES (?,?,?)";
  db.query(sqlInsert, [title, amount, category], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM expenses WHERE id=?";
  db.query(sqlRemove, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.getSingleExpense = (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM expenses where id=?";
  db.query(sqlGet, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

exports.editExpense = (req, res) => {
  const { id } = req.params;
  const { title, amount, category } = req.body;
  const sqlUpdate =
    "UPDATE expenses SET title=?, amount=?,category=? WHERE id=?";
  db.query(sqlUpdate, [title, amount, category, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};
