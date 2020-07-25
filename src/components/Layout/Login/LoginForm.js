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
          <div className="emailInput">Email Address</div>
          <input type="email" />
          <div className="checkBox">
            <input type="checkbox" name="remember" />
            <label for="remember">Remember this device</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
