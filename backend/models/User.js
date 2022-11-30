const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  todo: [{ type: mongoose.Schema.Types.ObjectId, ref: "TodoList" }],
});

userSchema.pre("save", async function (next){

  if(!this.isModified('password')){
      next();
  }
  this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.getJsonWebToken =  function () {
  return jwt.sign({_id:this._id}, process.env.SECRET_KEY)

}
module.exports = mongoose.model("User", userSchema);
