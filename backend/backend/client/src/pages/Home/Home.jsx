import React from "react";
import "./Home.scss";
import Header from "../../component/header/header";
import Offcanvas from "../../component/header/offcanvas";
import { Link } from "react-router-dom";
import Footer from '../../component/footer/footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <img src="./template/banner.png" alt="" width="100%" />
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="titles">
                    <div className="left-side">
                      <p>Products</p>
                      <h5>
                        Our Best-Selling <span>Print Products</span>
                      </h5>
                    </div>
                    <div className="right-side">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam consequat lorem fringilla varius rhoncus. Curabitur
                        sed lorem eu arcu ultricies tincidunt. Quisque arcu ex,
                        elementum suscipit mauris non, blandit blandit
                        nisl.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nam consequat lorem fringilla varius rhoncus.
                        Curabitur sed lorem eu arcu ultricies tincidunt. Quisque
                        arcu ex, elementum suscipit mauris non, blandit blandit
                        nisl.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nam consequat lorem fringilla varius rhoncus.
                        Curabitur sed lorem eu arcu ultricies tincidunt. Quisque
                        arcu ex, elementum suscipit mauris non, blandit blandit
                        nisl.
                      </p>
                    </div>
                  </div>

                  <div className="p-display">
                    <div className="p-card">
                      <div className="card" >
                        <div className="img">
                          <img
                            src="./template/coffee-mug.png"
                            className="card-img-top"
                            alt=""
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Coffee Mug</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sodales pharetra nisl ut semper.
                          </p>
                          <Link to="">
                            <button className="btn">Details</button>
                          </Link>
                        </div>
                      </div>

                      <div className="card" >
                        <div className="img">
                          <img
                            src="./template/visiting card (2).png"
                            className="card-img-top"
                            alt=""
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Visiting Card</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sodales pharetra nisl ut semper.
                          </p>
                          <Link to="">
                            <button className="btn">Details</button>
                          </Link>
                        </div>
                      </div>

                      <div className="card" >
                        <div className="img">
                          <img
                            src="./template/t-shirt.png"
                            className="card-img-top"
                            alt=""
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">T-Shirt</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sodales pharetra nisl ut semper.
                          </p>
                          <Link to="">
                            <button className="btn">Details</button>
                          </Link>
                        </div>
                      </div>

                      <div className="card" >
                        <div className="img">
                          <img
                            src="./template/broucher.png"
                            className="card-img-top"
                            alt=""
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Broucher</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sodales pharetra nisl ut semper.
                          </p>
                          <Link to="">
                            <button className="btn">Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Home;
