import React from 'react'
import {Link } from "react-router-dom";

export default function Search() {
  return (
    <div className='search-buttons'>
        <div className='search'>
            <input className='search-input' type="text" placeholder='Search PPD ID' >
           

            </input>
            <i class="fa-solid fa-magnifying-glass"></i>
            
        </div>

        <Link to="/Basicinfo" className='add-button'>
        <i class="fa-solid fa-plus"></i>
        Add Property
        </Link>
    </div>
  )
  }