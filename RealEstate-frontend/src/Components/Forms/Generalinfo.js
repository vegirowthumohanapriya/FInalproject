// Image: { type: String }
import React from "react";
import { Link } from "react-router-dom";
import "./Generalinfo.css";
import Staticpart from "../Homepage/Staticpart";
import Buttons from "../Buttons";
import Nav from "../Homepage/Dyanamicpart/Nav";
import { useContext } from "react";
import { fileStorage } from "../../App";
import { GeneralInfostore } from "../../App";
import { useNavigate } from "react-router-dom";

function Generalinfo() {
  const [GeneralInfoStorage, SetGeneralInfoStorage] =
    useContext(GeneralInfostore);
  const [file1, Setfile] = useContext(fileStorage);
  //Destructuring
  const { Name, Mobile, Postedby, SelectType, Featuredpackage, PPDPackage } =
    GeneralInfoStorage;
  const navigate = useNavigate();
  ////////////////////////////////////
  const changehandler = async (e) => {
    await SetGeneralInfoStorage({
      ...GeneralInfoStorage,
      [e.target.name]: e.target.value,
    });
    console.log(GeneralInfoStorage);
  };
  const submitdata = (e) => {
    e.preventDefault();
    //console.log(GeneralInfoStorage);
    navigate("/Locationinfo");
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
              <label>Name</label>
              <br />
              <select
                class="own"
                name="Name"
                value={GeneralInfoStorage.Name}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Owner
                </option>
                <br />
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <br />
              <label>Posted by</label>
              <br />
              <select
                class="posted"
                name="Postedby"
                value={GeneralInfoStorage.Postedby}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Posted By
                </option>
                <br />
                <option value="Owner">By Owner</option>
                <option value="Dealer">By Dealer</option>
              </select>
              <br />
              <label>Featured Package</label>
              <br />
              <select
                class="please"
                name="Featuredpackage"
                value={GeneralInfoStorage.Featuredpackage}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Please Select
                </option>
                <br />
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <br />

              <input
                class="file"
                type="file"
                name="Image"
                onChange={(e) => {
                  Setfile(e.target.files[0]);
                }}
                required
              ></input>
            </div>
            <div class="container1">
              <label>Mobile</label>
              <br />
              <input
                type="number"
                minlength="10"
                maxLength="10"
                name="Mobile"
                placeholder="Enter Mobile Number"
                value={GeneralInfoStorage.Mobile}
                onChange={changehandler}
                required
              ></input>
              <br />
              <label>Sale Type</label>
              <br />
              <select
                class="selec"
                name="SelectType"
                value={GeneralInfoStorage.SelectType}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Please Select
                </option>
                <br />
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <br />
              <label>PPD Package</label>
              <br />
              <select
                class="plesasesel"
                name="PPDPackage"
                value={GeneralInfoStorage.PPDPackage}
                onChange={changehandler}
              >
                <option Selected value="">
                  Please Select
                </option>
                <br />
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <br />
              <input
                type="checkbox"
                value={null}
                onChange={changehandler}
                required
              />
              <label style={{ color: "red", margin: "5px" }}>
                Accept Terms and Conditions{" "}
              </label>
            </div>
          </div>
          <div class="ho">
            <button class="sub">
              <Link to="/Propertydetail">Previous</Link>
            </button>
            <button class="sub1" type="submit">
              Submit & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Generalinfo;
