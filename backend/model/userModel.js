const mongoose = require('mongoose');

const sch = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String
})
const User = mongoose.model('user', sch);

module.exports = User;