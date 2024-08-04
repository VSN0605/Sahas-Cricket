import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';

import img13 from "./images/PavyaAndSiddhi.png";
import img14 from "./images/prachi.jpg";
import 'aos/dist/aos.css'
import AOS from 'aos'
// Assuming playersData is the array of cards you provided

const playersData = [
    {
      name: "Disha Kasat",
      imgSrc: "/img/disha_player2 (2).png",
      description: "Disha Kasat, a right-handed batter from Amravati, Maharashtra, has etched her name in cricket's annals with her remarkable consistency. Her journey is a testament to perseverance and talent, highlighted by two impressive half-centuries for India A Women in the Senior Women's One Day Challenger Trophy 2021. Disha's century for Vidarbha Women in Visakhapatnam was not only a display of skill but also a match-winning performance. Selected for the Central Zone team in the Senior Women Inter-Zonal T20 and by the Royal Challengers Bangalore in the WPL, Disha's rise is a testament to her potential. She symbolizes the power of dedication and hard work in achieving one's dreams."
    },
    {
      name: "Lokesh Marghade",
      imgSrc: "img/player1.jpg",
      description: "The Vidarbha captain, who was born with a twisted ankle, has demonstrated consistency in every competition he participates in recent days. In December 2021, Marghade also led the Challenger Trophy in runs scored. He had played four games in Chandigarh and scored 169 runs, including two fifties. 'I think the advice I'm getting from my elders at Sahas Cricket Club is really beneficial to me. 'My goal is to improve myself so that I can make a strong return to the Indian team,' he stated."
    },
    {
      name: "Prachi Puri",
      imgSrc: img14,
      description: "Prachi Puri, your accomplishments are truly inspiring! Your unwavering dedication, hard work, and perseverance have brought immense pride to your family and community. It has been an honor to witness your journey and growth, fueled by countless hours of practice and determination. Your respect and humility towards the game, coaches, and the learning process are exemplary qualities that distinguish you not only as an outstanding athlete but also as an admirable individual. Your selection for the VCA Women U-16 and U-19 T-20, U-19 One Day, and U-23 T-20 teams is a testament to your exceptional talent and commitment. As you progress on this remarkable path, I extend my heartfelt wishes for continued success and good fortune. May you reach new heights and fulfill your dreams, including representing at the national level."
    },
    {
      name: "Pavya and Siddhi",
      imgSrc: img13,
      description: "Pavya and Siddhi's selection for the VCA U-19 women’s team is a true reflection of their unwavering dedication, exceptional talent, and relentless hard work. Their journey to this point has been paved with countless sacrifices, hours of intense practice, and an unyielding commitment to excellence. Their achievement serves as a beacon of inspiration for aspiring athletes everywhere, showcasing the power of resilience and determination in the pursuit of one's dreams. As they step onto this new stage in their athletic careers, we stand in awe of their accomplishments and offer our sincerest congratulations. May their success continue to fuel their passion and drive as they navigate the challenges and triumphs that lie ahead. We are proud to celebrate their achievements and eagerly anticipate the remarkable feats they will undoubtedly accomplish in the future. Here's to Pavya and Siddhi, two shining examples of perseverance and triumph in the world of sports."
    },
    {
      name: "Sanket Khedkar",
      imgSrc: "img/SanketK_player.jpg",
      description: "Sanket Khedkar played for Vidarbha cricket association for u-14, u-16, and u-19 age group, part of BCCI Central zone camp. Currently, he is a Performance Analyst for the Indian PD cricket team and a Freelance Analyst for Star Sports in ICC Cricket World Cup 2023, IPL 2024, and T-20 World Cup 2024."
    },
    {
      name: "Viraj Kadbe",
      imgSrc: "/img/VijayK_player.png",
      description: "Viraj Kadbe made history as the first player to represent Vidarbha in the Ranji Trophy and later debuted in the IPL, showcasing talent from the region on a national platform. His journey exemplifies the rise of cricket in Vidarbha, inspiring aspiring cricketers to aim for higher achievements in the sport."
    },
    // Add more player objects as needed
  ];


const PlayerSwipper = () => {
    AOS.init({
        duration: 650,
        once: false
      });
    const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SwiperContent className='container' data-aos="fade-up" data-aos-duration="1000">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        grabCursor={true}
        navigation={true}
        autoplay={{ delay: '6000' }}
        pagination={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {playersData.map((player, index) => (
          <SwiperSlide key={index}>
            <div
              className="team-item position-relative cards"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ width: '70%' }}
              data-aos="zoom-in"

            >
              <div className="position-relative overflow-hidden rounded" style={{background: '#6d6d6d'}}>
                <img
                  className="img-fluid w-100"
                  src={player.imgSrc}
                  alt={player.name}
                  style={{ height: '340px' }}
                />
              </div>
              <div
                className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                style={{ background: 'rgba(34, 36, 41, 0.96)' }}
              >
                <h5 className="text-uppercase text-light">{player.name}</h5>
                {hoveredIndex === index && (
                    <div
                      style={{
                        height: "260px",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                      data-aos="fade-up"
                    >
                    <p style={{ color: '#989898', fontSize: '12.5px' }}>
                        {player.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContent>
  );
};

export default PlayerSwipper;

const SwiperContent = styled.div `
  .swiper {
    margin: 0 30px; /* Adjust margin for larger screens */
  }

  .swiper-horizontal {
    margin: 0; /* Reset margin for horizontal alignment */
    padding-left: 0;
  }

  .cards {
    width: 200px;
  }

  .swiper-wrapper {
    margin: 0; /* Reset margin for smaller screens */
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .swiper {
      margin: 0; /* Reset margin for smaller screens */
    }

    .swiper-horizontal {
      width: 100%; /* Adjust width for smaller screens */
    }
    .cards{
        width: 250px;
    }
  }

  .swiper-backface-hidden .swiper-slide{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.swiper-button-prev, div.swiper-button-next{
  color: white;
  background-color: #555;
  border-radius: 50%;
  padding: 0 22px;
}

div.swiper-button-next:after{
  font-size: 20px;
}

div.swiper-button-prev:after {
  font-size: 20px;
}
`;