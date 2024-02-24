const mongoose = require("mongoose");
const { options } = require("../routes/movies");


const connectDB = (uri) => {
    console.log("Hello , I am inside connectDB function....!!!");
    return mongoose.connect(uri)
}

module.exports = connectDB;