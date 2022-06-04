import React from 'react'
import {Link } from "react-router-dom";
import "./Basicinfo.css";
import Staticpart from '../Homepage/Staticpart';
import Buttons from '../Buttons';
import Nav from '../Homepage/Dyanamicpart/Nav';

function Basicinfo() {
  return (
<div class="main-container">
        <Staticpart />    
        <form>
            <Nav />
           <Buttons />         
    <div className = 'Content'>
        <div class="sub-inline">
            <div class="container1">
                <label>Property Type</label><br/>
                    <select class="selectproperty"   value={localStorage.getItem("propertyType")}onChange={(e) => localStorage.setItem("propertyType",e.target.value)}>
                        <option Selected >Select Property Type</option>
                        <option value="Land">Land</option>
                        <option value="Flat">Flat</option>
                        <option value="Villa">Villa</option>
                    </select><br/>
                <label>Price</label><br/>
                    <input type="number" placeholder='Example:10000' name = "Price" value={localStorage.getItem("Price")}onChange={(e) => localStorage.setItem("Price",e.target.value)} ></input>
                <label>Property Age</label><br/>
                    <select class="Age" value={localStorage.getItem("PropertyAge")}onChange={(e) => localStorage.setItem("PropertyAge",e.target.value)} >
                        <option Selected>Select Property Age</option><br/>
                        <option value="Less than 1 Year">Less than 1 Year</option>
                        <option value="Less than 5 Year">Less than 5 Year</option>
                        <option value="More than 5 Year">More than 5 Year</option>
                    </select><br/>
                <label>Property Description</label><br/>
                    <input type="text" name = "Propertydescription"  value={localStorage.getItem("Propertydescription")}onChange={(e) => localStorage.setItem("Propertydescription",e.target.value)}></input>
            </div>
            <div class="container1">
                <label>Negotiable</label><br/>
                    <select class="nego"    value={localStorage.getItem("Negotable")}onChange={(e) => localStorage.setItem("Negotable",e.target.value)}>
                        <option Selected>Select Negotiable</option><br/>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select><br/>
                <label>Ownership</label><br/>
                    <select class="owner" value={localStorage.getItem("OwnerShip")}onChange={(e) => localStorage.setItem("OwnerShip",e.target.value)} >
                        <option Selected>Select Ownership</option><br/>
                        <option value="Own">Own</option>
                        <option value="Rented">Rented</option>
                    </select><br/>
                <label>Property Approved</label><br/>
                    <select class="property" value={localStorage.getItem("PropertyApproved")}onChange={(e) => localStorage.setItem("PropertyApproved",e.target.value)} >
                        <option Selected>Property Approved</option><br/>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select><br/>
                <label>Bank Loan</label><br/>
                    <select class="bank"  value={localStorage.getItem("BankLoan")}onChange={(e) => localStorage.setItem("BankLoan",e.target.value)} >  
                        <option Selected>Bank Loan</option><br/>
                        <option value = {true}>Yes</option>
                        <option value= {false}>No</option>
                    </select>
        
            </div>
        </div>
            <div class="ho">
                <button class="sub"><Link to="/Homepage">Cancel</Link></button>
                <button class="sub1"><Link to="/Propertydetail">Submit & Continue</Link></button>
            </div>
    </div>
        </form>
        
        
</div>
  )
}

export default Basicinfo