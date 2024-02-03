const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    contact:{
        type:String,
    },
    address:{
        type:String,
    },
    message:{
        type:String,
    }

})
module.exports = mongoose.model("Users", UserSchema);