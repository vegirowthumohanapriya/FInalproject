import React, { useState } from 'react'
import {Link } from "react-router-dom";

export default function Login() {
    const [values,setValues]= useState({
        userId:"",
        password:""
    })
  return (
    <div className=' w-[30vw] h-[28vw]  rounded-[10px] bg-[white] relative center mt-[220px] ml-[458px]'>
        <div className = ' bg-white '>
            <p className='text-[#4C57B6] text-center text-4xl rounder-[3px] border-[1px] border-[#e2e2e2] border-style-[solid]mt-[3vh]'>Logo</p>
            <p className='text-center mt-[15px]'>Enter your credentials to acesss your account</p>
            <form action="" className='block h-[6vh] w-[24vw] ml-[3vw] '>
                <input type="email" />
                <input type="password" name="" id="" />

            </form>
            <Link className='block h-[6vh] w-[24vw] ml-[3vw] rounded-[3px] mt-[9vh] pointer bg-[#4c57b6]  text-[white] text-center'  to="/Homepage">Sign in</Link>
            <Link to="/Register" className='ml-[12vw] mt-[35px]  text-blue-600'>Sign up</Link>
        
        </div>
        <div className='mt-[180px] text-center'>
            <span className='login-span-text'>Don't have account?</span>
            <Link to="/Register" className=''>Sign up</Link>
            </div>
           
            

        
       
    </div>
  )
}
