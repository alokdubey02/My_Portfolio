import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVTR1,
    name: 'Alok',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In optio quos ipsam reprehenderit ratione. Unde mollitia voluptate aut atque labore ad et fugit corporis autem laudantium? Ipsa, numquam quae? Minus.'
  },{
    avatar: AVTR2,
    name: 'Alok',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In optio quos ipsam reprehenderit ratione. Unde mollitia voluptate aut atque labore ad et fugit corporis autem laudantium? Ipsa, numquam quae? Minus.'
  },{
    avatar: AVTR3,
    name: 'Alok',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In optio quos ipsam reprehenderit ratione. Unde mollitia voluptate aut atque labore ad et fugit corporis autem laudantium? Ipsa, numquam quae? Minus.'
  },{
    avatar: AVTR4,
    name: 'Alok',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In optio quos ipsam reprehenderit ratione. Unde mollitia voluptate aut atque labore ad et fugit corporis autem laudantium? Ipsa, numquam quae? Minus.'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Navigation,Pagination]}
      spaceBetween={40}
      navigation
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar,name,review},index)=>{
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt=''/>
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}
              </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials