// import React, { useState } from 'react';
// import Header from '../../component/header/header';
// import './Contact.scss';
// import GoogleMap from './googlemap';
// import Footer from '../../component/footer/footer';

//  const Contact=()=>{
  
//   const[contact, setContact]= useState({
//     name:'',
//     contact:'',
//     email:'',
//     address:'',
//     message:''

//   });

//   setContact({
//     name: "",
//     contact: "",
//     email: "",
//     address: "",
//     message: "",
//   });
// const onSubmit = (e) => {
//   e.preventDefault();
//   // Add your submission logic here, e.g., send data to server
//   console.log("Form submitted:", contact);
//   // You might want to clear the form after submission
//   setContact({
//     name: "",
//     contact: "",
//     email: "",
//     address: "",
//     message: "",
//   });
// };
//   const onChange=(e)=>{
//   setContact(
//     (preForm)=>({
//       ...preForm,[e.target.name]:e.target.value,
//     })
//   )};
//   console.log(contact);

//     return (
//       <>
//         <Header />
//         <div className="contact">
//           <div className="container">
//             <div className="wrapper">
//               <div className="row col-6 col-12">
//                 <div className="col-lg-6 w-100">
//                   <div className="contents">
//                     <div className="left-side">
//                       <p>CONTACT US</p>
//                       <h6>Get In Touch</h6>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Aliquam a ullamcorper ligula. Etiam hendrerit sodales
//                         erat, ac imperdiet odio venenatis eu. Donec lacinia
//                         augue nec diam consequat iaculis. Morbi in egestas arcu.
//                       </p>

//                       <div className="social-media">
//                         <i
//                           className="fa-brands fa-facebook-f fb"
//                           style={{ background: "#ff4073" }}
//                         ></i>
//                         <i
//                           className="fa-brands fa-twitter"
//                           style={{ background: "#01d5c9" }}
//                         ></i>

//                         <i
//                           className="fa-brands fa-linkedin"
//                           style={{ background: "#01d5c9" }}
//                         ></i>

//                         {/* //<i className="fa-brands fa-facebook"></i> */}
//                       </div>
//                     </div>
//                     <div className="right-side">
//                       <h6>NEED TO MAKE AN ENQUIRY?</h6>
//                       <form onSubmit={onSubmit}>
//                         <div className="form-group">
//                           <label>Name</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter your Name"
//                             name="name"
//                             value={contact.name}
//                             onChange={onChange}
//                           />
//                         </div>
//                         <div className="form-group">
//                           <label>Contact</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter your Name"
//                             name="contact"
//                             value={contact.contact}
//                             onChange={onChange}
//                           />
//                         </div>
//                         <div className="form-group">
//                           <label>Email</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter your Name"
//                             name="email"
//                             value={contact.email}
//                             onChange={onChange}
//                           />
//                         </div>
//                         <div className="form-group">
//                           <label>Address</label>
//                           <textarea
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter your Name"
//                             style={{ height: "80px" }}
//                             name="address"
//                             value={contact.address}
//                             onChange={onChange}
//                           />
//                         </div>
//                         <div className="form-group">
//                           <label>Message</label>
//                           <textarea
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter your Name"
//                             style={{ height: "80px" }}
//                             name="message"
//                             value={contact.message}
//                             onChange={onChange}
//                           />
//                         </div>
//                       </form>
//                       <button className="btn" onClick={onSubmit}>
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <GoogleMap />
//         <Footer />
//       </>
//     );

// }
 
// export default Contact;
import React, { useState } from "react";
import Header from "../../component/header/header";
import "./Contact.scss";
import GoogleMap from "./googlemap";
import Footer from "../../component/footer/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    message: "",
  });

  const onChange = (e) => {
    setContact((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/contact",
        contact,
        {
          headers: {
            //"Content-Type": "multipart/form-data",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setContact({
      name: "",
      contact: "",
      email: "",
      address: "",
      message: "",
    });

    if (!contact?.name) {
      toast.error("Please enter your first name");
    }
   
    if (!contact?.email) {
      toast.error("Please enter your email");
    }
    if (!contact?.contact) {
      toast.error("Please enter your blood group");
    }
    if (!contact?.address) {
      toast.error("Please enter your address");
    }
  
    if (!contact?.contact) {
      toast.error("Please enter your Contact");
    }
     if (!contact?.message) {
       toast.error("Please enter your Message");
     }
     else{
      toast.success("Successfully")
     }
    
  };
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
                      erat, ac imperdiet odio venenatis eu. Donec lacinia augue
                      nec diam consequat iaculis. Morbi in egestas arcu.
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
                    <ToastContainer />
                    <form >
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Name"
                          name="name"
                          value={contact.name}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Contact</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Name"
                          name="contact"
                          value={contact.contact}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Name"
                          name="email"
                          value={contact.email}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter your Name"
                          style={{ height: "80px" }}
                          name="address"
                          value={contact.address}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter your Name"
                          style={{ height: "80px" }}
                          name="message"
                          value={contact.message}
                          onChange={onChange}
                        />
                      </div>
                    </form>
                    <button className="btn" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleMap />
      <Footer />
    </>
  );
};

export default Contact;
