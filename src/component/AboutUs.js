import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import backgroundImage from "./images/abc.jpg"; // Import the image
import img5 from './Gallery Images/gallery_grp.png'

import mentor1 from './images/CoachesAndMentors/AChaurasia.jpg'
import mentor2 from './images/CoachesAndMentors/STalmale.jpg'

import 'aos/dist/aos.css'
import AOS from 'aos'
import { AdminContext } from "../Context/AdminContext";

const AboutUs = () => {

  AOS.init({
    duration: 650,
    once: false
  });

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const optionStyle = {
        height: '50px', // Set the height of options
        overflowY: 'scroll', // Add vertical scrollbar
        // You can add more styles here as needed
      };

      
      const{setIsAdmin} = useContext(AdminContext);
      useEffect(()=>{
        setIsAdmin(false)
      },[])

  return (
    <>
      <Abc>
        <div id="aboutid" >
        {/* hitesh */}
          <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            data-aos="fade-up"
     data-aos-duration="2000"
          >
            <div className="overlay"></div>
            <div className="overlay-2"></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-9 ftco-animate pb-5 text-center">
                                    <p className="breadcrumbs">
                                        <span className="mr-2">
                                            <Link to={'/'}>
                                                Home <i className="fa fa-chevron-right"></i>
                                            </Link>
                                        </span>{" "}
                                        <span>
                                            About<i className="fa fa-chevron-right"></i>
                                        </span>
                                    </p>
                                    <h1 className="mb-0 bread">About Us</h1>
                                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
        </div>
      </Abc>

      <div>
      <div class="container-fluid p-5" style={{ boxShadow: "0px 1px 48px -8px rgba(0,0,0,0.27)" }}>
    <div class="row gx-5">
        <div class="col-lg-7" data-aos="fade-right">
            <div class="mb-4">
                <h5 class="text-primary text-uppercase">About Us</h5>
                <h1 class="display-6 text-uppercase mb-0">Welcome to Sahas Cricket Club</h1>
            </div>
            <h4 class="text-body mb-4"></h4>
            <p style={{textAlign:'justify'}}>
                Passion meets purpose at Sahas Cricket Club! Renowned for excellence, we provide top-notch training for ages 14 to 29, while also embracing older enthusiasts and championing women's cricket. Our supportive environment fosters growth for players of all levels. With expert coaches, personalized attention, and comprehensive programs, we help you unleash your full potential on the pitch.
            </p>

            <div class="rounded bg-dark p-5">
                <ul class="nav nav-pills justify-content-between mb-3">
                    <li class="nav-item w-50">
                        <a class="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
                    </li>
                    <li class="nav-item w-50">
                        <a class="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Our Mission</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="pills-1">
                        <p class="text-secondary mb-0" style={{textAlign:'justify', position:''}}>
                            At Sahas Cricket Club, our vision is to serve as a global catalyst for cricketing excellence, dismantling barriers and promoting inclusivity across all levels of the sport. We are committed to raising standards, championing values of respect, fairness, and camaraderie, and cultivating the next generation of cricketing talent. Through our unwavering dedication, we aim to foster a lifelong love for cricket while making a meaningful impact on the global cricketing community.
                        </p>
                    </div>
                    <div class="tab-pane fade" id="pills-2">
                        <p class="text-secondary mb-0" style={{textAlign:'justify'}}>
                            At Sahas Cricket Club, our mission is to cultivate an inclusive culture of excellence in cricket, empowering individuals to achieve their sporting aspirations. We provide exceptional training and coaching facilities for all ages and skill levels, with a focus on advancing women's cricket and promoting gender equality. Through quality coaching, innovative methods, and a supportive environment, we aim to develop skilled athletes and compassionate leaders, embodying values of teamwork, integrity, and sportsmanship.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-5 mb-5 mb-lg-0" data-aos="fade-left">
            <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100 rounded img-fluid" src="img/club_img2.jpg" style={{ objectFit: "cover" }} />
            </div>
        </div>
    </div>
</div>



        {/* Card */}
        


            <div style={{background: 'linear-gradient(90deg, rgb(255 255 255) 0%, rgb(168 126 111 / 39%) 35%, rgb(255 255 255 / 5%) 100%)'}} data-aos="fade-up" data-aos-duration="2000">
        <div className="container" id="history" style={{padding:'20px 10px', alignItems:'left'}}>


          <h3>History</h3>
          <br />

          <p style={{textAlign:'justify', color:'black', }}>&nbsp; &nbsp;Established in 1978 by a group of passionate cricket enthusiasts, Sahas Cricket Club was born out of a shared vision to create a nurturing environment where cricketing talent could flourish. Named after the Sanskrit word "Sahas," meaning courage and determination, the club set out on a journey to become a beacon of excellence in the world of cricket. <br /><br />

          &nbsp; &nbsp;In its early years, Sahas Cricket Club started modestly, with makeshift facilities and limited resources. However, fueled by the dedication and commitment of its founders, the club quickly gained recognition for its emphasis on skill development and sportsmanship. Throughout the 1980s and 1990s, Sahas Cricket Club emerged as a dominant force in local cricketing circles, consistently producing talented players who showcased their prowess on the field. The club's focus on youth development became its hallmark, with a strong emphasis on providing opportunities for young cricketers to hone their skills and realize their potential. <br /><br />

          &nbsp; &nbsp;As Sahas Cricket Club continued to grow in stature, it expanded its reach beyond just training and coaching. The club became deeply involved in community initiatives, organizing cricketing events and tournaments to promote the sport at the grassroots level. Additionally, Sahas Cricket Club was at the forefront of advocating for gender inclusivity in cricket, actively supporting the growth of women's cricket and providing equal opportunities for female players. <br /><br />

          &nbsp; &nbsp;In the new millennium, Sahas Cricket Club entered a phase of modernization, investing in state-of-the-art facilities and technology to further enhance its training programs. Under the guidance of experienced coaches and mentors, the club adopted innovative training methodologies aimed at nurturing well-rounded cricketers equipped with both technical skills and a strong sense of sportsmanship. <br /><br />

          &nbsp; &nbsp;Today, Sahas Cricket Club stands as a symbol of excellence and inclusivity in the cricketing world. With a rich legacy spanning over four decades, the club continues to inspire generations of cricketers to pursue their dreams with courage and determination, embodying the spirit of Sahas both on and off the cricket pitch.</p>
        </div>
        </div>




        <center style={{margin:'30px 0'}}> <h3 style={{}}>Our Mentors</h3> </center>


        <Card>
        {/* <p>𝓣𝔂𝓹𝓮 𝓼𝓸𝓶𝓮𝓽𝓱𝓲𝓷𝓰 𝓽𝓸 𝓼𝓽𝓪𝓻𝓽</p> */}
        <div className="card" data-aos="zoom-in">
          <div className="card-info">
            <div className="card-avatar">
              <img src='img/mentor.png' alt='' className="image-icon img-fluid" style={{width:'100%', height:'100%',}}/>
            </div>
            <div className="card-title">Abhishek Mishra</div>
            <div className="card-subtitle">Ex- Cricker & Entrepreneur</div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <div className="card-info">
            <div className="card-avatar">
            <img src={mentor1} alt='' className="image-icon img-fluid" style={{width:'100%', height:'100%',}}/>
            </div>
            <div className="card-title">Abhishek Chaurasia</div>
            <div className="card-subtitle text-center">Ranji Player <br /> Owner Masterstroke sports</div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in">
          <div className="card-info">
            <div className="card-avatar">
            <img src={mentor2} alt='' className="image-icon img-fluid" style={{width:'100%', height:'100%',}}/>
            </div>
            <div className="card-title">Bhushan Talmale</div>
            <div className="card-subtitle text-center">Ex VCA Player, <br /> Represented VCA in all age groups</div>
          </div>
        </div>
        </Card>


      </div>
    </>
  );
};

export default AboutUs;

const Abc = styled.div`
  .hero-wrap {
    width: 100%;
    height: 900px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 0;
  }
  @media (max-width: 991.98px) {
    .hero-wrap {
      background-position: center center !important;
    }
  }
  .hero-wrap.hero-wrap-2 {
    height: 500px;
    position: relative;
    background-position: center center !important;
  }
  .hero-wrap.hero-wrap-2 .overlay {
    width: 100%;
    opacity: 0.2;
    background: #000000 !important;
    z-index: -1;
  }
  .hero-wrap.hero-wrap-2 .overlay-2 {
    opacity: 0.3;
  }
  .hero-wrap.hero-wrap-2 .slider-text {
    height: 500px;
  }
  .hero-wrap .overlay {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    opacity: 0;
    background: #000000;
  }
  .hero-wrap .overlay-2 {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    opacity: 0.5;
    background: #9acb56;
    background: -moz-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, #9acb56),
      color-stop(71%, rgba(255, 255, 255, 0)),
      color-stop(100%, rgba(255, 255, 255, 0))
    );
    background: -webkit-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -o-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -ms-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#9acb56),
      color-stop(71%, rgba(255, 255, 255, 0)),
      to(rgba(255, 255, 255, 0))
    );
    background: linear-gradient(
      to bottom,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9acb56', endColorstr='#ffffff', GradientType=0 );
  }
  .hero-wrap .slider-text {
    height: 90px;
    color: rgba(255, 255, 255, 0.904);
    z-index: 3;
  }
  .hero-wrap .slider-text .subheading {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.904);
    display: inline-block;
    margin-bottom: 1px;
    font-family: "Reenie Beanie", cursive;
  }
  .hero-wrap .slider-text h1 {
    font-size: 60px;
    color: #fff;
    line-height: 1;
    font-weight: 300;
    font-family: "Poppins", Arial, sans-serif;
  }
  @media (max-width: 991.98px) {
    .hero-wrap .slider-text h1 {
      font-size: 36px;
    }
  }
  .hero-wrap .slider-text p {
    font-weight: 400;
  }
  .hero-wrap .slider-text p strong {
    font-weight: 700;
  }
  .hero-wrap .slider-text p strong a {
    color: #000000;
  }
  .hero-wrap .slider-text .breadcrumbs {
    font-size: 18px;
    margin-bottom: 20px;
    z-index: 99;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.904);
    font-family: "Reenie Beanie", cursive;
  }
  .hero-wrap .slider-text .breadcrumbs span {
    color: rgba(255, 255, 255, 0.904);
  }
  .hero-wrap .slider-text .breadcrumbs span i {
    color: rgba(255, 255, 255, 0.904);
    font-size: 12px;
  }
  .hero-wrap .slider-text .breadcrumbs span a {
    color: rgba(255, 255, 255, 0.904);
  }
  .hero-wrap .slider-text .breadcrumbs span a:hover,
  .hero-wrap .slider-text .breadcrumbs span a:focus {
    color: #6cae22;
  }
  .hero-wrap .slider-text .breadcrumbs span a:hover i,
  .hero-wrap .slider-text .breadcrumbs span a:focus i {
    color: #6cae22;
  }
  .hero-wrap .slider-text .bread {
    font-weight: 300;
    color: #fff;
    font-size: 50px;
    text-transform: capitalize;
  }
`;


const Card = styled.div`
margin: 30px 0;
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next line */
  justify-content: center;
  gap: 20px;


.container {

}

.card {
  width: 100%; /* Take full width on small screens */
  max-width: 300px; /* Limit maximum width */
  height: auto;
  background: #f5f5f5;
  padding: 2rem 1.5rem;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

@media (min-width: 768px) {
  .card {
    width: calc(33.33% - 40px); /* Adjust according to your layout */
    max-width: none;
  }
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.card-avatar {
  --size: 150px;
  background: linear-gradient(to top, #f1e1c1 0%, #fcbc97 100%);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.2s ease;
  margin-bottom: 1rem;
}

.card-avatar img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

.card-social {
  transform: translateY(200%);
  display: flex;
  justify-content: space-around;
  width: 100%;
  opacity: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.card-social__item {
  list-style: none;
}

.card-social__item svg {
  display: block;
  height: 18px;
  width: 18px;
  fill: #515f65;
  cursor: pointer;
  transition: fill 0.2s ease, transform 0.2s ease;
}

.card-title {
  color: #333;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 2rem;
}

.card-subtitle {
  color: #859ba8;
  font-size: 0.8em;
}

.card:hover {
  box-shadow: 0 8px 50px #23232333;
  border: 2px solid gray;
}

.card:hover .card-info {
  transform: translateY(-5%);
}

.card:hover .card-social {
  transform: translateY(100%);
  opacity: 1;
}

.card-social__item svg:hover {
  fill: #232323;
  transform: scale(1.1);
}

.card-avatar:hover {
  transform: scale(1.1);
}


`;


const Rsp_about = styled.div `


display: flex;

 /* @media (min-width: 768px) {
    width: calc(33.33% - 40px); 
    max-width: none;
} */

`;


const GalleryHead = styled.div `
div{

    width: 200px;
    background: #fb5b21;
    height: 3px;
} @media screen and (max-width: 768px) {
    div {
      width: 32vw; /* Adjust width for smaller screens */
    }
  }
`;