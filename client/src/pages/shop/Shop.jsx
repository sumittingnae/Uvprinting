import React, { useEffect, useState } from "react";
import "./Shop.scss";
//import Offcanvas from '../../component/header/offcanvas';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
//import ImageUpload from '../img';
import Shops from './product.json';
import Filter from "./filter";

const Shop=()=> {
    const[product,setProduct]= useState([]);
    const [selectedCategory, setSelectedCategory]=useState("All");

    useEffect(()=>{
        setProduct(Shops);
    })

    const handleCategoryChange=(event)=>{
      setSelectedCategory(event.target.value);
    };
    const filteredProducts=()=>{
      if(selectedCategory === "All"){
        return product;
      }else{
        return product.filter((item)=> item.category === selectedCategory);
      }
    }
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
                   <Filter selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                   />

                    {/* ===============================================card================ */}
                    <div className="p-details">
                      <div className="cards">
                        {filteredProducts().map((item) => (
                          <div class="card" key={item.id}>
                            <img
                              class="card-img-top"
                              src={item.img}
                              alt="Card image cap"
                            />
                            <div class="card-body">
                              <h5 class="card-title">{item.name}</h5>
                              <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <button className="btn">Details</button>
                            </div>
                          </div>
                        ))}

                        {/* =========================card end==================== */}
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
