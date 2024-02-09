import React, { useEffect, useState } from "react";
import "./Shop.scss";
import Filter from "./filter";
import axios from "axios";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data);
        fetchAssetUrls(); // Fetch image URLs after fetching products
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const fetchAssetUrls = async () => {
    try {
      const response = await fetch("/api/assets/images");
      const data = await response.json();
      setImageUrls(data);
    } catch (error) {
      console.error("Error fetching asset URLs:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = () => {
    if (selectedCategory === "All") {
      return products;
    } else {
      return products.filter((item) => item.category === selectedCategory);
    }
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="wrapper">
          <div className="row col-6 col-12">
            <div className="col-lg-6 w-100">
              <div className="Shops">
                <h6>Shop</h6>
                <div className="left-side">
                  <Filter
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                  />

                  <div className="p-details">
                    <div className="cards">
                      {filteredProducts().map((product) => (
                        <div className="card" key={product.id}>
                          {/* Assuming each product has a corresponding image URL */}
                          <img
                            src={imageUrls[product.id - 1]} // Assuming imageUrls is an array and products are 1-indexed
                            alt={`Product Image ${product.id}`}
                            width="200px"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text price">
                              <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                              &nbsp;{product.price}
                            </p>
                            <p className="card-text des">{product.description}</p>
                            <button className="btn">Details</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
