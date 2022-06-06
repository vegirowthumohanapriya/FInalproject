import React from "react";
import { Link } from "react-router-dom";
import "./Basicinfo.css";
import Staticpart from "../Homepage/Staticpart";
import Buttons from "../Buttons";
import Nav from "../Homepage/Dyanamicpart/Nav";
import { BasicInfoStore } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Basicinfo() {
  const [BasicInfoStorage, SetBasicInfoStorage] = useContext(BasicInfoStore);
  const navigate = useNavigate();
  const {
    propertyType,
    Negotable,
    Price,
    OwnerShip,
    PropertyAge,
    PropertyApproved,
    Propertydescription,
    BankLoan,
  } = BasicInfoStorage;
  const changehandler = async (e) => {
    await SetBasicInfoStorage({
      ...BasicInfoStorage,
      [e.target.name]: e.target.value,
    });
    console.log(BasicInfoStorage);
  };
  const submitdata = (e) => {
    e.preventDefault();
    console.log(BasicInfoStorage);
    navigate("/Propertydetail");
  };

  return (
    <div class="main-container">
      <Staticpart />
      <form onSubmit={submitdata} action="">
        <Nav />
        <Buttons />
        <div className="Content">
          <div class="sub-inline">
            <div class="container1">
              <label>Property Type</label>
              <br />
              <select
                class="selectproperty"
                name="propertyType"
                value={BasicInfoStorage.propertyType}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Select Property Type
                </option>
                <option value="Land">Land</option>
                <option value="Flat">Flat</option>
                <option value="Villa">Villa</option>
              </select>
              <br />
              <label>Price</label>
              <br />
              <input
                type="number"
                placeholder="Example:10000"
                name="Price"
                value={BasicInfoStorage.Price}
                onChange={changehandler}
                required
                min={0}
              ></input>
              <label>Property Age</label>
              <br />
              <select
                class="Age"
                name="PropertyAge"
                value={BasicInfoStorage.PropertyAge}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Select Property Age
                </option>
                <br />
                <option value="1">Less than 1 Year</option>
                <option value="5">Less than 5 Year</option>
                <option value="5+">More than 5 Year</option>
              </select>
              <br />
              <label>Property Description</label>
              <br />
              <input
                type="text"
                name="Propertydescription"
                value={BasicInfoStorage.Propertydescription}
                onChange={changehandler}
                required
              ></input>
            </div>
            <div class="container1">
              <label>Negotiable</label>
              <br />
              <select
                class="nego"
                name="Negotable"
                value={BasicInfoStorage.Negotable}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Select Negotiable
                </option>
                <br />
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <br />
              <label>Ownership</label>
              <br />
              <select
                class="owner"
                name="OwnerShip"
                value={BasicInfoStorage.OwnerShip}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Select Ownership
                </option>
                <br />
                <option value="Own">Own</option>
                <option value="Rented">Rented</option>
              </select>
              <br />
              <label>Property Approved</label>
              <br />
              <select
                class="property"
                name="PropertyApproved"
                value={BasicInfoStorage.PropertyApproved}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Property Approved
                </option>
                <br />
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <br />
              <label>Bank Loan</label>
              <br />
              <select
                class="bank"
                name="BankLoan"
                value={BasicInfoStore.BankLoan}
                onChange={changehandler}
                required
              >
                <option Selected value="">
                  Bank Loan
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
                Terms andConditions{" "}
              </label>
            </div>
          </div>
          <div class="ho">
            <button class="sub" onClick={changehandler}>
              <Link to="/Homepage">Cancel</Link>
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

export default Basicinfo;
