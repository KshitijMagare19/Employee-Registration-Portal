const mongoose = require('mongoose');

module.exports = mongoose.model("Employee",{
    fullname : {type:String},
    location : {type:String},
    position : {type:String},
    salary : {type:String},
},'Employee')

