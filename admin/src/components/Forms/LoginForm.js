import React from 'react';
import '../../assets/css/Login/LoginForm.css';

function LoginForm() {
    return (
        <div className="login-form">
            <div className='login-form-inputs'>
                <input className='input-field' type='text' required placeholder=' ' />
                <label className='input-label'>Email</label>
            </div>
            <div className='login-form-inputs'>
                <input className='input-field' type='password' required placeholder=' ' />
                <label className='input-label'>Password</label>
            </div>
            <div className='login-form-button'>
                <button className='login-button'><span>Login</span></button>
            </div>
        </div>
    );
}
export default LoginForm;
