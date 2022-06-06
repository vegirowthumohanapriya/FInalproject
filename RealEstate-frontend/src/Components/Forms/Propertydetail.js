import React from "react";
import { Link } from "react-router-dom";
import "./Propertydetail.css";
import Staticpart from "../Homepage/Staticpart";
import Buttons from "../Buttons";
import Nav from "../Homepage/Dyanamicpart/Nav";
import { PropertyDetailstore } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Propertydetail() {
  const [PropertyDetailStorage, SetPropertyDetailStorage] =
    useContext(PropertyDetailstore);
  const navigate = useNavigate();
  const {
    length,
    Breadth,
    TotalArea,
    AreaUnit,
    NoofBHK,
    NoofFloor,
    Attached,
    WesternToilet,
    Furnished,
    CarParking,
    Lift,
    Electricity,
    Facing,
  } = PropertyDetailStorage;
  const changehandler = async (e) => {
    await SetPropertyDetailStorage({
      ...PropertyDetailStorage,
      [e.target.name]: e.target.value,
    });
    console.log(PropertyDetailStorage);
  };

  const submitdata = (e) => {
    e.preventDefault();
    console.log(PropertyDetailStorage);
    navigate("/Generalinfo");
  };
  return (
    <div class="main-container1">
      <Staticpart />
      <form onSubmit={submitdata}>
        <Nav />
        <Buttons />

        <div className="sub-inline1">
          <div className="container2">
            <label>Length</label>
            <br />
            <input
              type="number"
              placeholder="Length"
              name="length"
              value={PropertyDetailStorage.length}
              onChange={changehandler}
              required
            ></input>
            <br />
            <label>Total Area</label>
            <br />
            <input
              type="number"
              min={0}
              placeholder="Total Area"
              name="TotalArea"
              value={PropertyDetailStorage.TotalArea}
              onChange={changehandler}
              required
            ></input>
            <br />
            <label>No of BHK</label>
            <br />
            <select
              class="bhk"
              name="NoofBHK"
              value={PropertyDetailStorage.NoofBHK}
              onChange={changehandler}
              required
            >
              <option Selected value="">
                Select No of BHK
              </option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">More than 3 BHK</option>
            </select>
            <br />
            <label>Attached</label>
            <br />
            <select
              class="attached"
              name="Attached"
              value={PropertyDetailStorage.Attached}
              onChange={changehandler}
              required
            >
              <option Selected value="">
                Select Attached
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <br />
            <label>Furnished</label>
            <br />
            <select
              class="furnished"
              name="Furnished"
              value={PropertyDetailStorage.Furnished}
              required
              onChange={changehandler}
            >
              <option Selected value="">
                Select Furnished
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <br />
            <label>Lift</label>
            <br />
            <select
              class="lift"
              name="Lift"
              value={PropertyDetailStorage.Lift}
              onChange={changehandler}
            >
              <option Selected value="">
                Select Lift
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <br />
            <label>Facing</label>
            <br />
            <select
              class="fac"
              name="Facing"
              value={PropertyDetailStorage.Facing}
              onChange={changehandler}
              required
            >
              <option Selected value="">
                Select Facing
              </option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>
              <option value="South">South</option>
            </select>
            <br />
          </div>
          <div class="container2">
            <label>Breadth</label>
            <br />
            <input
              type="number"
              min={0}
              placeholder="Example:1000"
              name="Breadth"
              value={PropertyDetailStorage.Breadth}
              onChange={changehandler}
              required
            ></input>
            <br />
            <label>Area Unit</label>
            <br />
            <select
              class="unit"
              name="AreaUnit"
              value={PropertyDetailStorage.AreaUnit}
              onChange={changehandler}
              required
            >
              <option Selected value="">
                Area Unit
              </option>
              <option value="Square Meter">Square Meter</option>
              <option value="Square Foot">Square Foot</option>
              <option value="Square Feet">Square Feet</option>
            </select>
            <br />
            <label>No of Floor</label>
            <br />
            <select
              class="noof"
              name="NoofFloor"
              value={PropertyDetailStorage.NoofFloor}
              onChange={changehandler}
              required
            >
              <option Selected value="">
                Select No of Floor
              </option>
              <option value="1">1 Floor</option>
              <option value="2">2 Floor</option>
              <option value="3">More than 2 Floor</option>
            </select>
            <br />
            <label>Western Toilet</label>
            <br />
            <select
              class="western"
              name="WesternToilet"
              value={PropertyDetailStorage.WesternToilet}
              onChange={changehandler}
              required
            >
              <option Selected value="">
                Select Western Toilet
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <br />
            <label>Car Parking</label>
            <br />
            <select
              class="carparking"
              name="CarParking"
              value={PropertyDetailStorage.CarParking}
              onChange={changehandler}
              required
            >
              <option Selected value="">
                Select Car Parking
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <br />
            <label>Electricity</label>
            <br />
            <input
              type="text"
              placeholder="Example:3 phase"
              name="Electricity"
              value={PropertyDetailStorage.Electricity}
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
              Terms andConditions{" "}
            </label>
          </div>
        </div>
        <div class="pav">
          <button class="prevvv">
            <Link to="/Basicinfo">Previous</Link>
          </button>
          <button class="genera" type="submit">
            Submit & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Propertydetail;
