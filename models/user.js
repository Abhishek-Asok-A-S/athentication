const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,'Username cannot be blank']
    },
    password:{
        type:String,
        require:[true,'Password cannot be blank']
    }
})

module.exports = mongoose.model('User', userSchema);