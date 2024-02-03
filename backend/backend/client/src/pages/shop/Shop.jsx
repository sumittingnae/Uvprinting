import React, { useEffect, useState } from "react";
import "./Shop.scss";
//import Offcanvas from '../../component/header/offcanvas';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
//import ImageUpload from '../img';
import Shops from './product.json';

const Shop=()=> {
    const[product,setProduct]= useState([]);

    useEffect(()=>{
        setProduct(Shops);
    })
  return (
    <>
      <Header />
      <div className="shop">
        <div className="container">
          <div className="wrapper">
            <div className="row col-6 col-12">
              <div className="col-lg-6 w-100">
                <div className="Shops">
                  <h6>Shop</h6>
                  <div className="left-side">
                    <div className="title">
                      <p>Showing All Result</p>
                      <select id="cat">
                        <option value="dsort">Deafult Sorting</option>
                        <option value="sortbp">Sort by popularty</option>
                        <option value="sortbl">Sort by latest</option>
                        <option value="sortbar">Sort by average rating</option>
                      </select>
                      <div className="grid-line">
                        <button className="btn">
                          <i className="fa-solid fa-grip-lines"></i>
                        </button>
                        <button className="btn">
                          <i className="fa-solid fa-table-cells"></i>
                        </button>
                      </div>
                    </div>
                    <div className="p-details">
                      <div className="cards">
                        {product.map((items) => (
                          <div class="card" key={items.id}>
                            <img
                              class="card-img-top"
                              src={items.img}
                              alt="Card image cap"
                            />
                            <div class="card-body">
                              <h5 class="card-title">{items.name}</h5>
                              <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <button className="btn">Details</button>
                            </div>
                          </div>
                        ))}

                        {/* <div class="card">
                          <img
                            class="card-img-top"
                            src="..."
                            alt="Card image cap"
                          />
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <button className="btn">Details</button>
                          </div>
                        </div>
                         */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Shop;
