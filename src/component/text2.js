import React from 'react'
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Testy = () => {
  return (
    <Testimonial>
      <div className="main_conatiner">
        <div>
            <div className="topc">

            </div>
            <h2>Testimonial</h2>
            <div className="bottomC">
                <SwipeMe>
                <Swiper
                    pagination={{
                    type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                </SwipeMe>
            </div>
        </div>
      </div>
    </Testimonial>
  )
}

export default Testy
const Testimonial = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;

.main_conatiner{
    width: 100vw;
    display: flex;
    justify-content: center;
}

.topc{
    width: 100vw;
    height: 30px;
    background-color: salmon;
}
.bottomC{
    width: 100vw;
    height: 50vh;
    position: relative;
    top: -47px;
    background-color: gray;
    z-index: 0;
    padding-top: 5%;
}
h2{
    position: relative;
    top: -20px;
    text-align: center;
    z-index: 1;
}
`;

const SwipeMe = styled.div `
display: flex;
justify-content: center;
align-items: center;
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 50vw;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 200px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 786) {
    /* Adjust modal content width for smaller screens */
    .jqqSnU .swiper{
        width: 90vw;
    }
  }

`;