const mongoose = require('mongoose')
const User = require('./user')
const basicinfo = require('./basic-info')

const GeneralInfoSchema = new mongoose.Schema({
    Name: { type: String },
    Mobile: { type: String},
    Postedby: { type: String },
    SelectType: { type: String },
    Featuredpackage: { type: String },
    PPDPackage: { type: String },
    Image: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: User },
    PPDID:{type: mongoose.Types.ObjectId, ref:basicinfo}

})

module.exports = mongoose.model('GeneralInfo', GeneralInfoSchema)