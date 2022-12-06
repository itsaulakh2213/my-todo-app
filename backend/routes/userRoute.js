const express = require("express");
const { registerUser, loginUser, getUser } = require("../Controller/userController");
const { requrieLogin } = require("../Controller/todoController");
const router = express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/userDetail').get(requrieLogin, getUser)

module.exports = router;
