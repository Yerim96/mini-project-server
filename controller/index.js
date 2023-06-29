const models = require("../models");
const { sequelize } = require("../models/index");
// index
// todo
// todoId
// todoDelete

// models.visitor.findAll().then((result) => {
//   console.log(result);
//   res.render("visitor", { data: result });
// });

exports.index = (req, res) => {
  models.todo.findAll().then((result) => {
    res.json(result);
  });
};

exports.todo = (req, res) => {
  console.log(req.body);
  try {
    models.todo.create({
      title: req.body.inputValue,
      done: "0",
    });
    res.send({ result: true });
  } catch (error) {
    res.send({ result: false });
  }
};

exports.todoId = (req, res) => {
  console.log(req.params);
  const { title, done } = req.body;

  models.todo.update(
    {
      title: title,
      done: done,
    },
    {
      where: {
        id: Number(req.params.todoId),
      },
    }
  );
};

exports.todoDelete = (req, res) => {
  console.log(req.params.todoId);
  try {
    models.todo
      .destroy({ where: { id: Number(req.params.todoId) } })
      .then(() => {
        res.send({ result: true });
      });
  } catch (error) {
    res.send({ result: false });
  }
};
