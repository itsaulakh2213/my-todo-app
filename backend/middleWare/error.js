const ErrorHandler = require('../utils/errorHandlers');

module.exports = (err, req, res, next)=>{
        err.statuscode = err.statuscode || 500;
        err.message = err.message || "internal error";

        if(err.name === "CastError"){
            const message = `resource not found. Invalid ${err.path}`;
            err = new ErrorHandler(message, 400);
        }

        res.status(err.statuscode).json({
            success : false,
            message :  err.message
        });
}