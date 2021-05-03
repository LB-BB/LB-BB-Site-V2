//rfce
import React from "react";
import { Link } from "react-router-dom"
import { FaBars, FaTimes, FaBrain } from "react-icons/fa"
import { useState } from "react"

function Navbar() {
    const [click, setClick] = useState(false); //shows the hamburger menu

    const handleClick = () => setClick(!click) //toggles hamburger and x

  return <>
  <div className="navbar">
      <div className="navbar-container container">
      <Link to="/" className="navbar-logo">
          <FaBrain className="navbar-icon" />
          LB BRADBURN

      </Link>
      <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}

      </div>
      <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
          <li className="nav-item">
              <Link to="/" className="nav-links">
                  Home

              </Link>
          </li>
          <li className="nav-item">
              <Link to="/projects" className="nav-links">
                  Projects

              </Link>
          </li>
          <li className="nav-item">
              <Link to="/contact" className="nav-links">
                  Contact
              </Link>
          </li>
          <li className="nav-btn">
              {button ? (
                  <Link className="btn-link">
                      <Button to="/sign-up" buttonStyle="btn--outline">
                          Sign Up
                      </Button>
                  </Link>
              ) : (
                  <Link to="/sign-up" className="btn-link">
                      <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                          Sign Up
                      </Button>
                  </Link>
              )}
          </li>
      </ul>
      </div>
    </div>  
  </>;
}

export default Navbar;
