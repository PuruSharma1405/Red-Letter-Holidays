import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <div
    className={`hamburger-menu ${isOpen ? "open" : ""}`}
    onClick={toggleMenu}
  >
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
);


export default HamburgerMenu;
