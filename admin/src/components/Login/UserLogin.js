import React from "react";
import '../../assets/css/Login/UserLogin.css';
import LoginForm from "../Forms/LoginForm";
function UserLogin() {
    return(
        <div className="login-container">
            <div className="login-text-container">
                <p>Login To Admin Portal</p>
            </div>
            <div className="login-form-container">
                <LoginForm />
            </div>
            
        </div>
    )
};
export default UserLogin;