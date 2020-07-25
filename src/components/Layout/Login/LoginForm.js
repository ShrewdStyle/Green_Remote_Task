import React from "react";
import Logo from "../../../assets/Images/logo-r.svg";

const LoginForm = () => {
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <form>
          <img className="logoForm" src={Logo} alt="Green" />
          <h1 className="formHeader">Example login screen</h1>
          <div className="formSubHeader">Getting started with Green</div>
          <div className="emailHeader">Email Address</div>
          <input className="emailInput" type="email" />
          <div className="checkBox">
            <input className="formCheckBox" type="checkbox" name="remember" />
            <label className="rememberText" for="remember">
              Remember this device
            </label>
          </div>
          <button className="btnSignin">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
