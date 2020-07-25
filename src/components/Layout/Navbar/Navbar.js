import React from "react";
import { Link } from "react-router-dom";
import NavbarCurrent from "./NavbarCurrent";
import Logo from "../../../assets/Images/logo-r.svg";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <ul className="navbar">
        <Link to="/">
          <img className="logoMain" src={Logo} alt="Green" />
        </Link>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavbarCurrent link="/">Home</NavbarCurrent>
        </li>
        <li>
          {/* <Link to="/login">Login</Link> */}
          <NavbarCurrent link="/login">Login</NavbarCurrent>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
