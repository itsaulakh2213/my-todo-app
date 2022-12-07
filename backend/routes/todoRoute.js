const express = require("express");
const { createTodo, getTodo, deleteTodo, requrieLogin, updateTodo ,GetSingleTodo} = require("../Controller/todoController");
const router = express.Router();

router.route('/createTodo').post(requrieLogin, createTodo)
router.route('/getAllTodo').get(requrieLogin, getTodo)
router.route('/removeTodo/:id').delete(requrieLogin, deleteTodo)
router.route('/updateTodo/:id').put(requrieLogin, updateTodo)
router.route('/GetSingleTodo/:id').get(requrieLogin, GetSingleTodo)

module.exports = router;