import React from 'react'
import './Amazon.css';

function Amazon() {
  return (
    <div className="login">
        <div className='login-container'>
            <img 
            className='login-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
            alt='Amazon Logo'
            />
            <div className='login-box'>
                <h1>Sign-In</h1>
                <form>
                    <label htmlFor='email'>Email or mobile phone number</label>
                    <input type="email" id="email" required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />

                    <button type="submit" className='login-signinButton'>Continue</button>
                </form>
            </div>

            <div className='login-help'>
                <small>Need Help?</small>
            </div>
        </div>

        <div className='login-driver'>
            <hr /> <span>New to Amazon?</span> <hr />
        </div>

        <button className='login-createAccountButton'>Create your Amazon account</button>
    </div>
  )
}

export default Amazon