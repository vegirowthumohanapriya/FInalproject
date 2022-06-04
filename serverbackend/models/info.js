const mongoose = require('mongoose')
 const infoSchema = new mongoose.Schema({
    
     image:{type:String,required:true},
     Property:{type:String,required:true},
     Contact:{type:Number,required:true},
     Area:{type:Number,required:true}

 })

 module.exports = mongoose.model("Info",infoSchema)