import React,{useState,useEffect}from 'react';
import Header from '../../component/header/header';
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";
import { Pagination } from "swiper/modules";
import News from './news.json';
// import Img from '../shop/img';
//import Swiper from 'swiper';
//import { Pagination } from 'react-bootstrap';

 const Blog=()=>{
   const [blog, setBlog] = useState([]);
 useEffect(() => {
   setBlog(News);
 });

  return (

    <>
      <Header />
      <div className="blog">
        <div className="container">
          <div className="wrapper">
            <div className="row col-6 col-12">
              <div className="col-lg-6 w-100">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {blog.map((iteams)=>{ return (
                    <SwiperSlide key={iteams.id}>
                      <img src={iteams.img} alt="" />
                    </SwiperSlide>
                  );}
                 )

                  }
                 
                   
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );

}
export default Blog;