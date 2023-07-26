const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://kshitijmagare19:Kshitij123@cluster0.kp6t3s0.mongodb.net/EmployeeDB?retryWrites=true&w=majority'
module.exports = () => {
    return mongoose.connect(dbURL,
        {useNewUrlParser : true, useUnifiedTopology : true});
}