const mongoose = require('mongoose');



const TodoListSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }

})

module.exports = mongoose.model("TodoList", TodoListSchema);