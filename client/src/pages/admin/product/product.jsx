import React, { useState } from "react";
import "./product.scss";
import axios from "axios"; // import axios instead of Axios
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


const Product = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
     toast.success("sent successfully");
    } catch (error) {
      toast.error("Error adding product", error);
      setError("Error adding product. Please try again later");
    }

    // Form validation
    if (!name) {
      toast.error("Please enter name");
      return;
    }
    if (!image) {
      toast.error("Please select an image");
      return;
    }
    if (!price) {
      toast.error("Please enter price");
      return;
    }
    if (!description) {
      toast.error("Please enter description");
      return;
    }
    if (!category) {
      toast.error("Please enter category");
      return;
    }
  }

  return (
    <div className="product">
      <div className="container">
        <div className="wrapper">
          <div className="row col-6 col-12">
            <div className="col-lg-6">
              <h5>Product Upload</h5>
              {error && <p>{error}</p>}
              <ToastContainer/>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputPrice">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPrice"
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputCategory">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCategory"
                    placeholder="Category"
                    value={category}
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputDescription">Description</label>
                  <textarea
                    className="form-control"
                    id="inputDescription"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
