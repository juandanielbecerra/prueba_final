const mongoose = require("mongoose");
const userSchame = mongoose.Schema({
    name:{
        type:String,
        require:true,
      },
      Lastname:{
        type:String,
        require:true,
      },
      active:{
        type:String,
        require:false,
      },
      email:{
        type:String,
        unique:true,
      },
      password:{
        type:String,
        require:true,
      },
      role:{
        type:Boolean,
        require:true,
      },
      avatar:{
        type:String,
        require:true,
      },
});

module.exports = mongoose.model("User", UserSchame);