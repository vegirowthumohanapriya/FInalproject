import React from 'react'
import {Link } from "react-router-dom";
import "./Propertydetail.css";
import Staticpart from '../Homepage/Staticpart';
import Buttons from '../Buttons';
import Nav from '../Homepage/Dyanamicpart/Nav';

function Propertydetail() {
  return (
<div class="main-container1">
        <Staticpart />
        <form>
            <Nav/>
            <Buttons />
    
    <div className="sub-inline1"> 
        <div className="container2">
            <label>Length</label><br/>
                <input type="number" placeholder='Length' name="length" value={localStorage.getItem("length")}onChange={(e) => localStorage.setItem("length",e.target.value)}></input><br/>
            <label>Total Area</label><br/>
                <input type="number" placeholder='Total Area' name="TotalArea" value={localStorage.getItem("TotalArea")}onChange={(e) => localStorage.setItem("TotalArea",e.target.value)}></input><br/>
            <label>No of BHK</label><br/>
                <select class="bhk" value={localStorage.getItem("NoofBHK")}onChange={(e) => localStorage.setItem("NoofBHK",e.target.value)}>
                    <option Selected>Select No of BHK</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value=" More than 3 BHK">More than 3 BHK</option>
                </select><br/>
            <label>Attached</label><br/>
                <select class="attached">
                    <option Selected value={localStorage.getItem("Attached")}onChange={(e) => localStorage.setItem("Attached",e.target.value)}>Select Attached</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
            <label>Furnished</label><br/>
                <select class="furnished">
                    <option Selected value={localStorage.getItem("Furnished")}onChange={(e) => localStorage.setItem("Furnished",e.target.value)}>Select Furnished</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
            <label>Lift</label><br/>
                <select class="lift" value={localStorage.getItem("Lift")}onChange={(e) => localStorage.setItem("Lift",e.target.value)}>
                    <option Selected>Select Lift</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
            <label>Facing</label><br/>
                <select class="fac" value={localStorage.getItem("Facing")}onChange={(e) => localStorage.setItem("Facing",e.target.value)}>
                    <option Selected>Select Facing</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                </select><br/>
        </div>
        <div class="container2">
            <label>Breadth</label><br/>
                <input type="number" placeholder='Example:1000' name="Breadth" value={localStorage.getItem("Breadth")}onChange={(e) => localStorage.setItem("Breadth",e.target.value)}></input><br/>
            <label>Area Unit</label><br/>
                <select class="unit" value={localStorage.getItem("UnitArea")}onChange={(e) => localStorage.setItem("UnitArea",e.target.value)}>
                    <option Selected>Area Unit</option>
                    <option value="Square Meter">Square Meter</option>
                    <option value="Square Foot">Square Foot</option>
                    <option value="Square Feet">Square Feet</option>
                </select><br/>
            <label>No of Floor</label><br/>
                <select class="noof" value={localStorage.getItem("NoofFloor")}onChange={(e) => localStorage.setItem("NoofFloor",e.target.value)}>
                    <option Selected>Select No of Floor</option>
                    <option value="1 Floor">1 Floor</option>
                    <option value="2 Floor">2 Floor</option>
                    <option value="More than 2 Floor">More than 2 Floor</option>
                </select><br/>
            <label>Western Toilet</label><br/>
                <select class="western" value={localStorage.getItem("WesternToilet")}onChange={(e) => localStorage.setItem("WesternToilet",e.target.value)}>
                    <option Selected>Select Western Toilet</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
            <label>Car Parking</label><br/>
                <select class="carparking" value={localStorage.getItem("CarParking")}onChange={(e) => localStorage.setItem("CarParking",e.target.value)}>
                    <option Selected>Select Car Parking</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
            <label>Electricity</label><br/>
                <input type="text" placeholder='Example:3 phase' name ="Electricity" value={localStorage.getItem("Electricity")}onChange={(e) => localStorage.setItem("Electricity",e.target.value)}></input>
            
        </div>
    </div>
        <div class="pav">
        <button class="prevvv"><Link to="/Basicinfo">Previous</Link></button>
        <button class="genera"><Link to="/Generalinfo">Submit & Continue</Link></button>
        </div>
      
        </form>
        
</div>
  )
}

export default Propertydetail