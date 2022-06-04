const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const userRoutes = require('./routes/user')
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors({ origin: "*" }));
///////////schemas/////////////////
const Basicinfo_db = require('./models/basic-info')
const propertydetails_db = require('./models/property-detail')
const Generainfodetails_db = require('./models/general-info')
const locationinfodetails_db = require('./models/location-info')

//mongodb atlas lo
/////////////////multer////////////////////////
const multer = require("multer");
const path = require("path");
app.use("/images", express.static("images"));
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()  + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });
///storage property takes starage engine property
app.use("/images", express.static("images"));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.post("/userData",async(req,res)=>{
  
        console.log("these from Userdata")
        console.log(req.body);
        console.log("THis is basic info")
        console.log(req.body.Basicinfo);
    
      await Basicinfo_db.create(req.body.Basicinfo)
      await propertydetails_db.create(req.body.Propertydetail)
      //await Generainfodetails_db.create(req.body.GeneralInfo)
      await locationinfodetails_db.create(req.body.Locationinfo)

  
   
      console.log("error with db")
  
   //database checkchey
       //console.log(userBasicinfo)
 
   
        console.log("error")
    
    res.end()
})
app.post("/Generainfo",upload.single("Image"),(req,res)=>{
    res.send("Hello")
    console.log("This from Generalinfo")
    console.log(req.body)
    console.log(req.file.filename)
    res.end()
})
const port = process.env.PORT || 5000

app.use(userRoutes);

const start = async() => {
    try {
        await connectDB(process.env.MONGOO_URI)
        app.listen(process.env.PORT || 5000, () => {
            console.log(`server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error)

    }

}

start()