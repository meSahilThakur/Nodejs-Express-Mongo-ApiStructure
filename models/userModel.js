const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Name is required"],
        trim: true
    },
    email:{
        type: String,
        require: [true, "Email is required"],
        unique: true
    },

});


module.exports = mongoose.model("User", userSchema);


// in mongodb User is changed to users
// User -> users