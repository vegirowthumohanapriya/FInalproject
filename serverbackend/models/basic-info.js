const mongoose = require('mongoose')
const User = require('./user')

const BasicInfo = new mongoose.Schema({
    propertyType: { type: String },
    Negotable: { type: String },
    Price: { type: String },
    OwnerShip: { type: String },
    PropertyAge: { type:String },
    PropertyApproved: { type: String },
    Propertydescription: { type: String, },
    BankLoan: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: User }
})


module.exports = mongoose.model('BasicInfo', BasicInfo)