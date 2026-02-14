"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require('mongoose');
// const { CustomError } = require( '../errors/customError' );

const dbConnection = function() {
    // Connect:
    // if (!process.env.MONGODB_URI)
    //     throw new CustomError("Mongodb url is required");
    mongoose.connect(process.env.MONGODB)
        .then(() => console.log('* DB Connected * '))
        .catch((err) => console.log('* DB Not Connected * ', err))
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    dbConnection
} 