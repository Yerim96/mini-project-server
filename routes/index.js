const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

//show all todos
router.get("/todos", controller.index);

//create a new todo
router.post("/todo", controller.todo);

//edit a specific todo
router.patch("/todo/:todoId", controller.todoId);

//remove a specific todo
router.delete("/todo/:todoId", controller.todoDelete);

module.exports = router;
