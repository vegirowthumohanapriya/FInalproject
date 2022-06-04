import React, { useState } from 'react'
import {Link } from "react-router-dom";


export default function Register() {
    const [values,setValues]=useState({
        userId:"",
        password:"",
        confirmpassword:""
    })
  return (
    <div className='register-form'>
        <div className='register'>
        <p className='login-logo'>Logo</p>
        <p className='login-text'>create new account</p>
        <form action="" className='form-register'>
            <input type="email" placeholder='userId' name='userId' value={values.userId} />
            <input type="password" name="password" value={values.password}   placeholder='password'  />
            <input type="password" name="confirmpassword" value={values.confirmpassword}  placeholder='confirm password' />
            <button className='sign-up-button' type="submit">Sign up</button>
        </form>
        </div>
      
        <Link className='sign-in-link'  to="/">Sign in</Link>
    </div>
  )
}
