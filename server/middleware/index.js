const { Error } = require('mongoose');

const ObjectId = require('mongoose').Types.ObjectId;

const validateDbId = (req, res, next) => {
    if (ObjectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: "Invalid Id is passed, Please check ID."
        })
    else
        next()
}

const IdNotFound = (req, res) => {
    res.status(404).json({
        error: "The given : " + req.params.id + " ID not found"
    })
}

const ErrorHandler = (error, req, res, next) => {
    res.status(500).json({ error })
}
module.exports = {
    validateDbId,
    IdNotFound,
    ErrorHandler
}