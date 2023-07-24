require("dotenv").config();

const mongoose = require('mongoose');

const connectToDB = async () => {

   // mongoose.connect(mongodbURI) is used to connect with database
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{console.log(`DB connected`)})
    .catch((err)=>{console.log(err)});
};

module.exports = connectToDB;