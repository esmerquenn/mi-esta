// SIDE BAR'S LIST AND LINKS

import React from "react";
import { Link } from "react-router-dom";

function NavMenu({ num, activeTab, name, pathName, onClick, icon }) {
  return (
    <li>
      <i className={` menu_icon ${icon}`}></i>
      <Link onClick={() => onClick(num)} className={activeTab === num ? " a_active" : ""} num={num} to={pathName}>
        {name}
      </Link>
    </li>
  );
}

export default NavMenu;
