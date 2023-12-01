import React, { useState } from 'react';
import './AuthPage.css';
import companyLogo from './Primary.png';

const AuthPage = () => {
    const [action, setAction] = useState('Sign Up')

  return (
    <div>
        <div className="">
        <img className='title' src={companyLogo} alt='Company Name' />
        </div>
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'Login' ? (<div></div>):(
                    <div className="input">
                        <img src="" alt="" />
                        <input type="text" placeholder='Full Name' />
                    </div>)}
                <div className="input">
                    <img src="" alt="" />
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action === 'Sign Up' ? (<div></div>) : (
                <div className="forgot-password">Forgot Password? <span>Click Here</span></div>)}
            <div className="submit-container">
                <div className={action === 'Login' ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === 'Sign Up' ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default AuthPage