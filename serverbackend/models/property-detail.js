const mongoose = require("mongoose");

const User = require("./user");
const basicinfo = require("./basic-info");

const PropertdetailsSchema = new mongoose.Schema({
  length: { type: Number },
  Breadth: { type: Number },
  TotalArea: { type: Number },
  AreaUnit: { type: String },
  NoofBHK: { type: Number },
  NoofFloor: { type: Number },
  Attached: { type: Boolean },
  WesternToilet: { type: Boolean },
  Furnished: { type: Boolean },
  CarParking: { type: Boolean },
  Lift: { type: Boolean, required: true },
  Electricity: { type: String },
  Facing: { type: String },
  PPDID: { type: mongoose.Types.ObjectId, ref: basicinfo },
});

module.exports = mongoose.model("Propertdetails", PropertdetailsSchema);
