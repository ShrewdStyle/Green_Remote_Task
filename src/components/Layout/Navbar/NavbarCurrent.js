import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCurrent = (props) => {
  return (
    <li className="current">
      <NavLink to={props.link} exact activeClassName="active">
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavbarCurrent;
