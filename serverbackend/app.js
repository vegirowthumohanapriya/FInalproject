const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const userRoutes = require("./routes/user");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors({ origin: "*" }));
///////////schemas/////////////////
const Basicinfo_db = require("./models/basic-info");
const propertydetails_db = require("./models/property-detail");
const Generainfodetails_db = require("./models/general-info");
const locationinfodetails_db = require("./models/location-info");

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
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });
///storage property takes starage engine property
app.use("/images", express.static("images"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.post("/userData", async (req, res) => {
  console.log("these from Userdata");
  console.log(req.body);
  res.send({ satus: "got data" });
  res.end();
});

app.post("/Generalinfo", upload.single("Image"), (req, res) => {
  console.log("This is general info");
  console.log(req.body);
  console.log(req.file.filename);
  res.end();
});
///////////////////////////////////////////////////////////
const port = process.env.PORT || 5000;

app.use(userRoutes);

const start = async () => {
  try {
    //await connectDB(process.env.MONGOO_URI);
    app.listen(8080, () => {
      console.log(`server is running on port 8080`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
