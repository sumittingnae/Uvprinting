import React from 'react';
import Header from '../../component/header/header';
import './Contact.scss';
import GoogleMap from './googlemap';
import Footer from '../../component/footer/footer';

 const Contact=()=>{

    return (
      <>
        <Header />
        <div className="contact">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="contents">
                    <div className="left-side">
                      <p>CONTACT US</p>
                      <h6>Get In Touch</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam a ullamcorper ligula. Etiam hendrerit sodales
                        erat, ac imperdiet odio venenatis eu. Donec lacinia
                        augue nec diam consequat iaculis. Morbi in egestas arcu.
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
                          className="fa-brands fa-linkedin"
                          style={{ background: "#01d5c9" }}
                        ></i>

                        {/* //<i className="fa-brands fa-facebook"></i> */}
                      </div>
                    </div>
                    <div className="right-side">
                      <h6>NEED TO MAKE AN ENQUIRY?</h6>
                      <form>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                          />
                        </div>
                      </form>
                      <button className='btn'>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoogleMap/>
        <Footer/>
      </>
    );

}
export default Contact;