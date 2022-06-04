
// Image: { type: String }
import React from 'react'
import {Link } from "react-router-dom";
import "./Generalinfo.css";
import Staticpart from '../Homepage/Staticpart';
import Buttons from '../Buttons';
import Nav from '../Homepage/Dyanamicpart/Nav';
import {useContext} from 'react'
import {fileStorage} from '../../App'
function Generalinfo() {
    const [file1,Setfile] = useContext(fileStorage)
  return (
<div class="main-container">
        <Staticpart/>
        <form>
        <Nav/>
        <Buttons/>
    <div className='Content'>
    <div class="sub-inline">
        <div class="container1">
            <label>Name</label><br/>
                <select class="own" value={localStorage.getItem("Name")}onChange={(e) => localStorage.setItem("Name",e.target.value)}>
                    <option Selected>Owner</option><br/>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>
            <label>Posted by</label><br/>
                <select class="posted" value={localStorage.getItem("Postedby")}onChange={(e) => localStorage.setItem("Postedby",e.target.value)}>
                    <option Selected>Posted By</option><br/>
                    <option value="By Owner">By Owner</option>
                    <option value="By Dealer">By Dealer</option>
                </select><br/>
            <label>Featured Package</label><br/>
                <select class="please" value={localStorage.getItem("Featuredpackage")}onChange={(e) => localStorage.setItem("Featuredpackage",e.target.value)} >
                    <option Selected>Please Select</option><br/>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br/>

            <input class="file" type="file" name="Image" onChange={(e)=>{Setfile(e.target.files[0])}} ></input>
        </div>
            <div class="container1">
                <label>Mobile</label><br/>
                    <input type="number" placeholder='Enter Mobile Number' name="Mobile" value={localStorage.getItem("Mobile")}onChange={(e) => localStorage.setItem("Mobile",e.target.value)}></input><br/>
                <label>Sale Type</label><br/>
                    <select class="selec" value={localStorage.getItem("SelectType")}onChange={(e) => localStorage.setItem("SelectType",e.target.value)}>
                        <option Selected>Please Select</option><br/>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                </select><br/>
                <label>PPD Package</label><br/>
                    <select class="plesasesel" value={localStorage.getItem("PPDPackage")}onChange={(e) => localStorage.setItem("PPDPackage",e.target.value)}>
                        <option Selected>Please Select</option><br/>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select><br/>
            </div>
    </div>
            <div class="ho">
                <button class="sub"><Link to="/Propertydetail">Previous</Link></button>
                <button class="sub1"><Link to="/Locationinfo">Submit & Continue</Link></button>
            </div>
        
        </div>
            </form>
        
</div>
  )
}

export default Generalinfo