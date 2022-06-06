import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Locationinfo.css";
import Staticpart from "../Homepage/Staticpart";
import Buttons from "../Buttons";
import Nav from "../Homepage/Dyanamicpart/Nav";
import axios from "axios";
import { useContext, useState } from "react";
import Homepage from "../Homepage/Homepage";
/////////////////////////////////////////////////////////
import { BasicInfoStore } from "../../App";
import { PropertyDetailstore } from "../../App";
import { GeneralInfostore } from "../../App";
import { Locationinfostore } from "../../App";
import { fileStorage } from "../../App";
///////////////////////////////////////////////////////
import { useNavigate } from "react-router-dom";

function Locationinfo() {
  const [BasicInfoStorage, SetBasicInfoStorage] = useContext(BasicInfoStore);
  const [PropertyDetailStorage, SetPropertyDetailStorage] =
    useContext(PropertyDetailstore);
  const [GeneralInfoStorage, SetGeneralInfoStorage] =
    useContext(GeneralInfostore);
  const [LocationInfoStorage, SetLocationInfoStorage] =
    useContext(Locationinfostore);
  const [file1, Setfile] = useContext(fileStorage);
  const { Email, City, Area, Pincode, Adresss, Landmark, Latitude, Longitude } =
    LocationInfoStorage;

  const navigate = useNavigate();
  const changehandler = async (e) => {
    await SetLocationInfoStorage({
      ...LocationInfoStorage,
      [e.target.name]: e.target.value,
    });
    console.log(LocationInfoStorage);
  };
  ///////////////////////////////////////////////////////////////////
  const submitdata = async (e) => {
    e.preventDefault();
    const allimageformdata = new FormData();
    allimageformdata.append("Name", GeneralInfoStorage.Name);
    allimageformdata.append("Mobile", GeneralInfoStorage.Mobile);
    allimageformdata.append("Postedby", GeneralInfoStorage.Postedby);
    allimageformdata.append("SelectType", GeneralInfoStorage.SelectType);
    allimageformdata.append(
      "Featuredpackage",
      GeneralInfoStorage.Featuredpackage
    );
    allimageformdata.append("PPDPackage", GeneralInfoStorage.PPDPackage);
    allimageformdata.append("Image", file1);
    var allData = {
      Basicinfo: BasicInfoStorage,
      Propertydetail: PropertyDetailStorage,
      Generalinfo: GeneralInfoStorage,
      Locationinfo: LocationInfoStorage,
    };
    var fulldata = allData;
    console.log(allData);
    console.log("this is form data");
    //console.log(allimageformdata);
    axios
      .post("http://localhost:8080/userData", fulldata,{headers:{}})
      .then((res) => {
        alert("data posted success fully");
      })
      .catch((e) => {
        alert("Data not posted");
      });
    axios
      .post("http://localhost:8080/Generalinfo", allimageformdata, {
        headers: {
          "Content-Type": "multip art/form-data",
        },
      })
      .then((res) => {
        alert("New post added successfully");
      })
      .catch((e) => {
        console.log(e);
        alert("Post not uploaded");
      });

    navigate("/Homepage");
  };
  return (
    <div class="main-container">
      <Staticpart />
      <form onSubmit={submitdata}>
        <Nav />
        <Buttons />
        <div className="Content">
          <div class="sub-inline">
            <div class="container1">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={LocationInfoStorage.Email}
                onChange={changehandler}
                required
              ></input>
              <br />
              <label>Area</label>
              <br />
              <select
                class="posby"
                name="Area"
                value={LocationInfoStorage.Area}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Posted By
                </option>
                <br />
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              <br />
              <label>Address</label>
              <br />
              <input
                type="text"
                placeholder="Address"
                name="Adresss"
                value={LocationInfoStorage.Adresss}
                onChange={changehandler}
                required
              ></input>
              <br />
              <label>Latitude</label>
              <br />
              <input
                type="text"
                placeholder="Latitude"
                name="Latitude"
                value={LocationInfoStorage.Latitude}
                onChange={changehandler}
                required
              ></input>
              <br />
            </div>
            <div class="container1">
              <label>City</label>
              <br />
              <select
                class="city"
                name="City"
                value={LocationInfoStorage.City}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Select City
                </option>
                <br />
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <br />
              <label>Pincode</label>
              <br />
              <select
                class="pin"
                type="text"
                name="Pincode"
                value={LocationInfoStorage.Pincode}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Select Pincode
                </option>
                <br />
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <br />
              <label>Landmark</label>
              <br />
              <input
                type="text"
                placeholder="Landmark"
                name="Landmark"
                value={LocationInfoStorage.Landmark}
                onChange={changehandler}
                required
              ></input>
              <br />
              <label>Longitude</label>
              <br />
              <input
                type="text"
                placeholder="Longitude"
                name="Longitude"
                value={LocationInfoStorage.Longitude}
                onChange={changehandler}
                required
              ></input>
              <input
                type="checkbox"
                value={null}
                onChange={changehandler}
                required
              />
              <label style={{ color: "red", margin: "5px" }}>
                Terms and Conditions{" "}
              </label>
            </div>
          </div>
          <div class="ho">
            <button class="sub" style={{ marginTop: "35px" }}>
              <Link to="/Generalinfo">Previous</Link>
            </button>
            <button class="sub1" type="submit" style={{ marginTop: "35px" }}>
              Add Property
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Locationinfo;
