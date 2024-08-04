import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import slide1 from "./images/Slides/gallery_grp.png";
import slide2 from "./images/gallery_grp1.png";
import slide3 from "./images/Slides/club_carosel1.jpeg";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [text, setText] = useState("");
    const initialText = "Join Sahas Cricket Club!";
    const typingSpeed = 100; // Adjust typing speed here

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < initialText.length) {
                setText((prevText) => prevText + initialText.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, typingSpeed);
        return () => clearInterval(timer);
    }, []);

    return (
        <SliderContent className="sliders">
            <Swiper
                className=""
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={true}
                autoplay={{ delay: 2000 }}
                pagination={true}
                effect="cube" // Add fade effect
            >
                <SwiperSlide>
                    <div className="slider">
                        <img className="w-full h-full border-r-8" src={slide1} alt="" />
                        <div className="text-overlay">
                            <h2 className="text-white">{text}</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider">
                        <img className="w-full h-full border-r-8" src={slide2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider">
                        <img className="w-full h-full border-r-8" src={slide3} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </SliderContent>
    );
};

export default Slider;

const SliderContent = styled.div`
  .slider {
    position: relative;
    img {
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      object-position: top;
      height: 80vh;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  }

  .text-overlay h2 {
    font-size: 2.5rem;
  }
`;
