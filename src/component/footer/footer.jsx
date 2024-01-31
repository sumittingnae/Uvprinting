import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom'


 const footer=()=>{

    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-5 w-100">
                  <div className="footers">
                    <div className="row">
                      <div className="col-3 colu-1">
                        <div className="logo">
                          <img src="./template/logo.png" />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <div className="social-media">
                            <i
                              className="fa-brands fa-facebook-f fb"
                              style={{ background: "#ff4073" }}
                            ></i>
                            <i
                              className="fa-brands fa-twitter"
                              style={{ background: "#01d5c9" }}
                            ></i>
                            <i
                              className="fa-brands fa-whatsapp"
                              style={{ background: "#ffc400" }}
                            ></i>
                            <i
                              className="fa-brands fa-linkedin"
                              style={{ background: "#01d5c9" }}
                            ></i>
                            <i
                              className="fa-brands fa-youtube"
                              style={{ background: "#ff4073" }}
                            ></i>
                            {/* //<i className="fa-brands fa-facebook"></i> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-3 colu-2">
                        <h6>Company</h6>
                        <ul>
                          <li>
                            <Link to="/about" id="menu">
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop" id="menu">
                              Shop
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog" id="menu">
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact" id="menu">
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3 colu-2 colu-3">
                        <h6>Company</h6>
                        <ul>
                          <li>
                            <Link to="/about" id="menu">
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop" id="menu">
                              Shop
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog" id="menu">
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact" id="menu">
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3 colu-2 colu-4">
                        <h6>Company</h6>
                        <ul>
                          <li>
                            <Link to="/about" id="menu">
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop" id="menu">
                              Shop
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog" id="menu">
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact" id="menu">
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

}
export default footer