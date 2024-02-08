import React from 'react';
import './admin.scss'
import Message from './message/message';
import Product from './product/product';
import Home from './Home/home'

const Admin=()=>{

    return (
      <>
        <div className="header">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="logo">
                    <img src="./template/logo.png" width="150px" />
                  </div>

                  <div className="tabs">
                    <div class="d-flex align-items-start tab-2">
                      <div
                        class="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          class="nav-link active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          Home
                        </button>
                        <button
                          class="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Profile
                        </button>
                        <button
                          class="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          Messages
                        </button>
                        <button
                          class="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Settings
                        </button>
                        <button
                          class="nav-link"
                          id="v-pills-product-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-product"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-product"
                          aria-selected="false"
                        >
                          Product Uploder
                        </button>
                      </div>

                      {/* ============================================Button end========================================== */}

                      <div class="tab-content" id="v-pills-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <Home/>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          s
                        </div>
                        <div
                          class="tab-pane fade w-100"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <Message />
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                        >
                          ...
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-product"
                          role="tabpanel"
                          aria-labelledby="v-pills-product-tab"
                        >
                        <Product/>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ============================end ======================== */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Admin;