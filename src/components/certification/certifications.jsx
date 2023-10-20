import React from 'react'
import './certifications.css'
import AVTR1 from '../../assets/jlptsquare.png'
import AVTR2 from '../../assets/dts.jpg'
import AVTR3 from '../../assets/TcsSpecialAward.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [{
  avatar: AVTR1,
  name: "JLPT N4",
  aboutCertification: "Japanese Language Proficiency Test"
},
{
  avatar: AVTR1,
  name: "JLPT N5",
  aboutCertification: "Japanese Language Proficiency Test"
},
{
 avatar: AVTR3,
  name: "Special Initiative Award - TCS Japan - 22-Aug-2022",
  aboutCertification: "Special Initiative Award for recognition of outstanding service and contribution ."
},
{
  avatar: AVTR2,
   name: "Design Thinking Fundamentals",
   aboutCertification: "TCS Interactive & DLX Design Lab Tokyo Certify that completed 10- week Design Thinking Fundamentals Courses."
 }
]
const certifications = () => {
  return (
    <section id="certifications">
      <h5>Review My Certification</h5>
      <h2>Certifications</h2>
      <Swiper className="container certifications__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {data.map(({ avatar, name, aboutCertification },index) => {
          return (
          <SwiperSlide key={index} className="certification">
            <div className="certificate_client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5>{name}</h5>
            <small className="client__review">{aboutCertification}</small>
          </SwiperSlide>
          )
        })}
        </Swiper>
        </section>
  );
}

export default certifications