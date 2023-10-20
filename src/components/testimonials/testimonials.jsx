import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/degree.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [{
  avatar: AVTR1,
  name: "(MCA) Master of Computer Applications (2013 - 2016)",
  review: "Completed Master of Computer Applications from South Gujarat University (VNSGU) with 7.70 Cumulative Grade Point Average (CGPA) "
},
{
 avatar: AVTR1,
  name: "(BCA) Bachelor of Computer Applications (2010 - 2013)",
  review: "Completed Bachelor of Computer Applications from South Gujarat University (VNSGU) with 6.70 Cumulative Grade Point Average (CGPA)"
},
{
  avatar: AVTR1,
   name: "(HSC) Higher Secondary School",
   review: "Completed Higher Secondary Certificate (HSC) from Gujarat Secondary and Higher Secondary Education Board (GSHSEB) With A1 Grade"
 },
 {
  avatar: AVTR1,
   name: "(SSC) Secondary School",
   review: "Completed Secondary School Certificate (SSC) from Gujarat Secondary and Higher Secondary Education Board (GSHSEB) With B1 Grade"
 },
]
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review My School Background</h5>
      <h2>Education</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {data.map(({ avatar, name, review },index) => {
          return (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })}
        </Swiper>
        </section>
  );
}

export default testimonials