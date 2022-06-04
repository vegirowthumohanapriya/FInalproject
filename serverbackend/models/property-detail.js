const mongoose = require('mongoose')

const User = require('./user')
const basicinfo = require('./basic-info')

const PropertdetailsSchema = new mongoose.Schema({
    length: { type: String },
    Breadth: { type: String  },
    TotalArea:{type: String },
    AreaUnit: { type: String },
    NoofBHK: { type: String  },
    NoofFloor: { type: String  },
    Attached: { type: String },
    WesternToilet: { type: String },
    Furnished: { type: String },
    CarParking: { type: String  },
    Lift: { type: String },
    Electricity: { type: String },
    Facing: { type: String },
    PPDID:{type: mongoose.Types.ObjectId, ref:basicinfo}

})


module.exports = mongoose.model('Propertdetails', PropertdetailsSchema)