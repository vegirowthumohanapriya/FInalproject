const mongoose = require('mongoose')
const User = require('./user')
const basicinfo = require('./basic-info')

const LocationInfoSchema = new mongoose.Schema({
    Email: { type: String, },
    City: { type: String },
    Area: { type: String },
    Pincode: { type: String },
    Adresss: { type: String },
    Landmark: { type: String },
    Latitude: { type: String },
    Longitude: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: User },
    PPDID:{type: mongoose.Types.ObjectId, ref:basicinfo}


})


module.exports = mongoose.model('LocationInfo', LocationInfoSchema)