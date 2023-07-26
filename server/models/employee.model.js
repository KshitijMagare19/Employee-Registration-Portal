const mongoose = require('mongoose');

module.exports = mongoose.model("Employee",{
    firstName : {type:String},
    lastName : {type:String},
    email : {type:String},
    salary : {type:String},
},'Employee')

