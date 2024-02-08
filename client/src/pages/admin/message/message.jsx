import React, { useEffect, useState } from 'react';
import "./message.scss";
//import Data from './product.json'
import axios from 'axios';


const Message =()=>{
  const [message,setMessage]=useState([]);


  useEffect(() => {
    axios.get("http://localhost:8000/api/messages") // Replace with your Laravel server address
      .then((response) => setMessage(response.data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []); 
   return (
      <>
        <div className="message">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">sr</th>
                        <th scope="col" style={{ width: "auto" }}>
                          Name
                        </th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Message</th>
                        <th scope="col">Address</th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {message.map((items) => (
                        <tr key={items.id}>
                          <th scope="row">{items.id}</th>
                          <td>{items.name}</td>
                          <td>{items.email}</td>
                          <td>{items.contact}</td>
                          <td id="td">{items.message}</td>
                          <td>{items.address}</td>
                        </tr>
                      ))}

                      {/* <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr> */}
                      {/* <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Message