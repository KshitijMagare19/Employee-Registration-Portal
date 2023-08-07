const express = require('express');

const router = express.Router();
const Employee = require('../models/employee.model');
const { validateDbId, IdNotFound } = require('../middleware/index');

const { generateCrudMethods } = require('../Services/index');
const EmployeeCurd = generateCrudMethods(Employee);

router.get('/', (req, res, next) => {
    EmployeeCurd.getAll()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            next(err);
        });
})
router.get('/:id', validateDbId, (req, res, next) => {
    EmployeeCurd.getById(req.params.id)
        .then((data) => {
            if (data) {
                res.send(data);
            }
            else {
                IdNotFound(req, res)
            }
        }).catch((err) => {
            next(err);
        });
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    const newRecord = {
        fullname: req.body.fullname,
        location: req.body.location,
        position: req.body.position,
        salary: req.body.salary,
    }
    EmployeeCurd.create(newRecord)
        .then((data) => {
            res.status(201).json(data);
        }).catch((err) => {
            next(err);
        });
})

router.put('/:id', validateDbId, (req, res, next) => {
    const updateRecord = {
        fullname: req.body.fullname,
        location: req.body.location,
        position: req.body.position,
        salary: req.body.salary,
    }
    EmployeeCurd.update(req.params.id, updateRecord)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            next(err);
        });
})

router.delete('/:id', validateDbId, (req, res, next) => {
    EmployeeCurd.delete(req.params.id)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            next(err);
        });
})

module.exports = router;