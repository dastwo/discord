const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    mail: {type: String, unique: true, lowercase: true},
    username: { type: String},
    password: { type: String}
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)