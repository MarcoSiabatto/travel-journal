import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navTitle">
        <FaGlobeAmericas className="icon" /> &nbsp; My Travel Journal
      </h1>
    </nav>
  );
};

export default Navbar;
