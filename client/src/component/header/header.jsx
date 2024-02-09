import React from "react";
import "./header.scss"; // Corrected the import statement
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="wrapper">
            <div className="row col-6 col-12">
              <div className="col-lg-6 w-100">
                <div className="headers">
                  <div className="logo">
                    <img src="./template/logo-2.png" />
                  </div>

                  <div className="menu">
                    <Link to="/" className="menu-link">
                      Home
                    </Link>
                    <Link to="/shop" className="menu-link">
                      Shop
                    </Link>

                    <Link to="/Blog" className="menu-link">
                      Blog
                    </Link>
                    <Link to="/contact" className="menu-link">
                      Contact
                    </Link>
                    <Link className="menu-link">
                      <div class="dropdown">
                        <button
                          class="btn"
                          type="link"
                          id="navbarDarkDropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Service<i className="fa-solid fa-angle-down"></i>
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link class="dropdown-item" to="/">
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link class="dropdown-item" to="/shop">
                              Home
                            </Link>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                  <div className="btns">
                    <button className="btn">Get Quto</button>
                  </div>
                 <Link to="/login" id="login">Login</Link>

                  <div className="side-menu">
                    <div class="dropdown">
                      <button
                        class="btn"
                        type="link"
                        id="navbarDarkDropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Menu
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link class="dropdown-item" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/shop">
                            Service
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/contact">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; // Corrected the component name to start with a capital letter
