import React from "react";
import "./header.scss"; // Correct the import statement
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="main">
                    <div className="logo">
                      <img src="./template/logo.png" alt="logo" />
                    </div>
                    <div className="menu">
                      <Link to="/" id="menu">
                        Home
                      </Link>
                      <Link to="/" id="menu">
                        Shop
                      </Link>

                      <NavDropdown title="Service" id="basic-nav-dropdown" className="dropbtn">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>

                      <Link to="/" id="menu">
                        Blog
                      </Link>
                      <Link to="/" id="menu">
                        About
                      </Link>
                      <Link to="/" id="menu">
                        Contact
                      </Link>
                    </div>
                    <button className="btn"> Get Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; // Correct the component name to start with a capital letter
