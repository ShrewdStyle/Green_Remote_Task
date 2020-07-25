import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="homeContainer">
      <h1 className="welcomeHeader">Green Remote Task</h1>
      <h2 className="welcomeSubHeader">
        Welcome to Green, to get started please click the login button below.
      </h2>
      <Link to="/login">
        <button className="btnLoginMain">Login</button>
      </Link>
    </div>
  );
};

export default Welcome;
