import React from "react";
import "./Home.scss";
import Header from "../../component/header/header";
import Offcanvas from "../../component/header/offcanvas";

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

                  <div>
                    aaa
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
export default Home;
