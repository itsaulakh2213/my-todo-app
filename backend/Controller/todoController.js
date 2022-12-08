const Todo = require("../models/todo");
const catchAsyncError = require("..//middleWare/catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

(exports.requrieLogin = catchAsyncError(async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(401).json({
      success: false,
      error: "you must be logged in",
    });
  }
  const decoded = await jwt.verify(token, process.env.SECRET_KEY);
  req.user = await User.findById(decoded._id);

  next();
})),
  (exports.createTodo = catchAsyncError(async (req, res, next) => {
    const { title, description } = req.body;

    const createTodo = await Todo.create({
      title,
      description,
      userId: req.user._id,
    });

    const user = await User.findById(req.user._id);

    user.todo.push(createTodo._id);

    await user.save();

    res.status(201).json({
      success: true,
      message: `created successfully`,
    });
  }));

exports.getTodo = catchAsyncError(async (req, res, next) => {
  const data = await Todo.find({
    userId: req.user._id,
  });

  res.status(200).json({
    success: true,
    message: `get all todo items successfully`,
    data,
  });
});

exports.deleteTodo = catchAsyncError(async (req, res, next) => {
  const removeData = await Todo.findOneAndRemove({
    _id: req.params.id,
  });

  res.status(200).json({
    success: true,
    message: `delete todo successfully`,
    removeData,
  });
});

exports.updateTodo = catchAsyncError(async (req, res, next) => {
  const updateData = await Todo.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
      },
    }
  );

  res.status(200).json({
    success: true,
    updateData,
  });
});

exports.GetSingleTodo = catchAsyncError(async (req, res, next) => {
  const data = await Todo.findOne({
    _id: req.params.id,
  });

  res.status(200).json({
    success: true,
    message: `get todo successfully`,
    data,
  });
});
