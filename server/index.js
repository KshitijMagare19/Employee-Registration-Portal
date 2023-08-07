const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//local import
const connectDB = require('./db');
const employeeRouter = require('./controllers/employee.controller')
const app = express();
const {ErrorHandler} = require('./middleware/index');

//middleware
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/employee',employeeRouter);
app.use(ErrorHandler);

connectDB()
    .then(() => {
        console.log("connected to db");
        app.listen(3000, () => {
            console.log("Server started at port 3000 :)")
        });
    }).catch((err) => {
        next(err);
    });