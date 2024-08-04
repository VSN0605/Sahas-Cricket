import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img1 from "./Gallery Images/gallery_img.png";
import img2 from "./Gallery Images/gallery_grp1.png";
import img5 from "./Gallery Images/gallery_grp.png";
import img4 from "./Gallery Images/gallery_img4.png";
import img3 from "./images/womes_cricket.png";
import img12 from "./images/pd_student.png";
import img6 from "./Gallery Images/player1.jpg";
import img7 from "./Gallery Images/gallery_img123.png";
import img8 from "../component/images/Slides/indoor.jpg";
import img9 from "./Gallery Images/gallery_img13.png";
import img10 from "./Gallery Images/gallery_img14.png";
import img11 from "./Gallery Images/gallery_img15.png";
import img13 from "./images/PavyaAndSiddhi.png";
import bgimg from './images/bg-img.jpeg'

import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import { Link } from "react-router-dom";
import Navigate_Context from "../Context/Navigate_Context";
import 'aos/dist/aos.css'
import AOS from 'aos'
import arrow from "./images/arrow.png";

import slide1 from "./images/Slides/caro4.jpg";
import slide2 from "./images/Slides/caro3.webp";
import slide3 from "./images/Slides/Stadium.jpeg";
import slide7 from "./images/Slides/caro2.webp";
import slide4 from "./images/Slides/caro1.webp";
import slide5 from "./images/Slides/Slide_img1.jpeg";
import slide6 from "./images/Slides/caro4.png";
import PlayerCard from "./PlayerCard";
import PopUp_Context from "../Context/PopUp_Context";
import PlayerSwipper from "./PlayerSwipper";
import { Swiper, SwiperSlide } from "swiper/react";
import Event_Btn from "./Event_Btn";
import MeetTeam from "./MeetTeam";
import Facility from "./Facility";
import { AdminContext } from "../Context/AdminContext";
import Counter from "./Counter";

// import { createPortal } from "react-dom";
// import { Modal } from "./components/Modal";

// import Loader from 'react-loader-spinner';
// import { Loader } from 'react-loader-spinner';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const players = [
  {
    id: 1,
    image: "/img/disha_player2 (2).png",
    name: "Disha Kasat",
    description: "Disha Kasat, a right-handed batter from Amravati, Maharashtra, has etched her name in cricket's annals with her remarkable consistency. Her journey is a testament to perseverance and talent, highlighted by two impressive half-centuries for India A Women in the Senior Women's One Day Challenger Trophy 2021. Disha's century for Vidarbha Women in Visakhapatnam was not only a display of skill but also a match-winning performance. Selected for the Central Zone team in the Senior Women Inter-Zonal T20 and by the Royal Challengers Bangalore in the WPL, Disha's rise is a testament to her potential. She symbolizes the power of dedication and hard work in achieving one's dreams."
  },
  {
    id: 2,
    image: "/img/player1.jpg",
    name: "Lokesh Marghade",
    description: "The Vidarbha captain, who was born with a twisted ankle, has demonstrated consistency in every competition he participates in recent days. In December 2021, Marghade also led the Challenger Trophy in runs scored. He had played four games in Chandigarh and scored 169 runs, including two fifties. 'I think the advice I'm getting from my elders at Sahas Cricket Club is really beneficial to me. 'My goal is to improve myself so that I can make a strong return to the Indian team,' he stated."
  },
  {
    id: 3,
    image: "/img/SiddhiAndAroohi.png",
    name: "Siddhi & Arohi",
    description: "Siddhi and Arohi, your achievements are truly remarkable! Your hard work, dedication, and perseverance have paid off, bringing immense pride to your family and community. It's been a privilege to witness your growth and progress, fueled by countless hours of practice and determination. Your humility and respect towards your coaches, the game, and the learning process are admirable qualities that set you apart as not only exceptional athletes but also as admirable individuals. Earning a spot in the U-19 women’s camp organized by @bcciofficial.in @bcci.women is a testament to your talent and commitment. As you continue on your journey, we extend our heartfelt wishes for success and good fortune. May you continue to push yourselves to new heights and achieve your dreams, including representing at the national level."
  },
  {
    id: 4,
    image: "/img/player4.jpg",
    name: "Pavya and Siddhi",
    description: "Pavya and Siddhi's selection for the VCA U-19 women’s team is a true reflection of their unwavering dedication, exceptional talent, and relentless hard work. Their journey to this point has been paved with countless sacrifices, hours of intense practice, and an unyielding commitment to excellence. Their achievement serves as a beacon of inspiration for aspiring athletes everywhere, showcasing the power of resilience and determination in the pursuit of one's dreams. As they step onto this new stage in their athletic careers, we stand in awe of their accomplishments and offer our sincerest congratulations. May their success continue to fuel their passion and drive as they navigate the challenges and triumphs that lie ahead. We are proud to celebrate their achievements and eagerly anticipate the remarkable feats they will undoubtedly accomplish in the future. Here's to Pavya and Siddhi, two shining examples of perseverance and triumph in the world of sports."
  },
  {
    id: 3,
    image: "/img/SiddhiAndAroohi.png",
    name: "Siddhi & Arohi",
    description: "Siddhi and Arohi, your achievements are truly remarkable! Your hard work, dedication, and perseverance have paid off, bringing immense pride to your family and community. It's been a privilege to witness your growth and progress, fueled by countless hours of practice and determination. Your humility and respect towards your coaches, the game, and the learning process are admirable qualities that set you apart as not only exceptional athletes but also as admirable individuals. Earning a spot in the U-19 women’s camp organized by @bcciofficial.in @bcci.women is a testament to your talent and commitment. As you continue on your journey, we extend our heartfelt wishes for success and good fortune. May you continue to push yourselves to new heights and achieve your dreams, including representing at the national level."
  },
  {
    id: 2,
    image: "/img/player1.jpg",
    name: "Lokesh Marghade",
    description: "The Vidarbha captain, who was born with a twisted ankle, has demonstrated consistency in every competition he participates in recent days. In December 2021, Marghade also led the Challenger Trophy in runs scored. He had played four games in Chandigarh and scored 169 runs, including two fifties. 'I think the advice I'm getting from my elders at Sahas Cricket Club is really beneficial to me. 'My goal is to improve myself so that I can make a strong return to the Indian team,' he stated."
  },
  // Add more players here if needed
];


export default function Home({ dbpath }) {

  AOS.init({
    duration: 650,
    once: false
  });

  const [loader, setLoader] = useState(true)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setShowPopUp(false);

  const [activeItem, setActiveItem] = useState(null);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  
  const{showPopUp, setShowPopUp} = useContext(PopUp_Context);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  // const [open, setOpen] = useState(false);

  const { about, setAbout, navi, setNavi, ids, setIds, handalaboutclick } =
    useContext(Navigate_Context);
    
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    // Check if it's not the initial render
    if (about) {
      const element = document.getElementById(ids);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setAbout(!about);
        setNavi(!navi);
      }
    } else {
      setInitialRender(true);
    }
  }, [about]);

  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 5) + 1); // Cycle through slides 1 to 5
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
  }, []);

  const handleDotClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const [currentOffset, setCurrentOffset] = useState(0);
  const windowSize = 3;
  const paginationFactor = 220;
  const items = [
    { name: "Kin Khao", tag: ["Thai"] },
    { name: "Jū-Ni", tag: ["Sushi", "Japanese", "$$$$"] },
    { name: "Delfina", tag: ["Pizza", "Casual"] },
    { name: "San Tung", tag: ["Chinese", "$$"] },
    { name: "Anchor Oyster Bar", tag: ["Seafood", "Cioppino"] },
    { name: "Locanda", tag: ["Italian"] },
    { name: "Garden Creamery", tag: ["Ice cream"] },
  ];

  const atEndOfList =
    currentOffset <= paginationFactor * -1 * (items.length - windowSize);
  const atHeadOfList = currentOffset === 0;

  const moveCarousel = (direction) => {
    if (direction === 1 && !atEndOfList) {
      setCurrentOffset((prevOffset) => prevOffset - paginationFactor);
    } else if (direction === -1 && !atHeadOfList) {
      setCurrentOffset((prevOffset) => prevOffset + paginationFactor);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!atEndOfList) {
        setCurrentOffset((prevOffset) => prevOffset - paginationFactor);
      } else {
        // If at end, move back to the beginning smoothly
        setCurrentOffset(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentOffset, atEndOfList]); // Include atEndOfList in the dependency array

  const images = [
    { src: slide6, caption: "C-Division Winning team" },
    { src: img1, caption: "*Don't Need a Caption*" },
    { src: img2, caption: "Hello'w Team !!" },
    { src: img8, caption: "Indoor facilities of ICC" },
    { src: img3, caption: "Talented Womens !" },
    { src: img5, caption: "'Vidharbha' Team" },
    { src: img6, caption: "Our Captain Lokesh Margade" },
    { src: img7, caption: "Support 'Specially Abled' Team" },
    { src: img9, caption: "We can't afford a cat!" },
    { src: img10, caption: "Get Padded Up" },
    { src: img11, caption: "Talented Youngsters" },
    { src: img12, caption: "Support 'Specially Abled' Team" },
    // Add more image objects as needed...
  ];
// console.log('images', images);

  const text = "Join Sahas Cricket Club!";
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
      let charIndex = 0;
      const typingEffect = () => {
          if (charIndex <= text.length) {
              setDisplayText(text.slice(0, charIndex));
              charIndex++;
              setTimeout(typingEffect, 200); // Typing speed (100ms delay)
          } else {
              // setIsTyping(false);
                charIndex = 0;
                setDisplayText(''); // Clear the display text
                setTimeout(typingEffect, 100); 
          }
      };

      typingEffect(); // Start typing effect

      return () => {
          // Clean up if component unmounts
          clearTimeout(typingEffect);
      };
  }, [text]); // Re-run effect when 'text' prop changes


  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(false);
    }, 3000);

    // return () => clearInterval(interval);
  }, []);
  
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
};


const [currentSlide1, setCurrentSlide1] = useState(0);
  const slides = [slide1, slide2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide1((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  
  const{setIsAdmin} = useContext(AdminContext);
  useEffect(()=>{
    setIsAdmin(false)
  },[])

  return (
    <>
      <div>
        

        {showPopUp && (
          <ModalContainer>
            <div data-aos="zoom-in-up">
            <div className="popup-content">
              <div class="card">
                  <div className="image_co">
                    <img src={slide3}  alt="popup Img" />
                  </div>
                  <button className="cross-icon" onClick={handleClose}><i class="fas fa-times"></i></button>
                  <div class="textBox" style={{display:'flex', justifyContent:'center',flexDirection:'column'}}>
                    <p class="text head" style={{textAlign:'center'}}>Welcome, to the Sahas Cricket Club !!</p>
                    <p style={{textAlign:'center'}}>Our Products out there, Buy Now..</p>
                    <Link to={'/Products'}><button class="text price" style={{width:'100%',textAlign:'center', outline:"none", border:"none", display:'flex', justifyContent:'center'}}>Show Now</button>
</Link>
                  </div>
              </div>
              </div>
            </div>
          </ModalContainer>
        )}

        {/* <!-- Carousel Start --> */}
        <MainCarousel>

          <div className="swiper-container" data-aos="fade-up" data-aos-duration="2000">
    <Swiper navigation={true} loop={true} cssMode={true} mousewheel={true} keyboard={true} autoplay={{ delay: 5000, disableOnInteraction: false, }} modules={[Navigation, Autoplay, Keyboard, Mousewheel]} className="mySwiper">
      {/* <SwiperSlide><img src="img/club_carosel1.png" alt="" className="swiper-image" /></SwiperSlide> */}
      <SwiperSlide><img src={slide6} alt="" className="swiper-image" /></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" className="swiper-image" /></SwiperSlide>
      <SwiperSlide><img src={slide1} alt="" className="swiper-image" style={{objectFit:'cover', maxHeight:'50%'}}/></SwiperSlide>
      <SwiperSlide><img src={slide5} alt="" className="swiper-image" /></SwiperSlide>
      {/* Add other slides */}
    </Swiper>
    <div className="caption">
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center p-5">
        <div className="p-3" style={{ maxWidth: "900px" }}>
          <h1 className="display-2 text-white text-uppercase mb-md-4">
            <span className={isTyping ? 'typing' : ''}>Beyond Limits : {displayText}</span>
          </h1>
          <Link to={"/JoinUs"} className="btn btn-primary py-md-3 px-md-5 me-3">Join Us</Link>
          <Link to={"/ContactUs"} className="btn btn-light py-md-3 px-md-5">Contact Us</Link>
        </div>
      </div>
    </div>
  </div>
        </MainCarousel>

        <div
          class="container-fluid p-3"
          style={{
            boxShadow: "0px 1px 48px -8px rgba(0,0,0,0.27)",
            overflowX: "hidden",
          }}
          id="aboutid"
        >
          <div class="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div
                className="position-relative"
                style={{ width: "100%", height: "100%" }}
                data-aos="fade-right"
              >
                <img
                  className="position-absolute w-100 h-100 rounded img-fluid"
                  src="/img/club_img.jpg" // Assuming img folder is at the root level of your project
                  style={{}}
                  alt="Club Image"
                />
              </div>
            </div>

            <div class="col-lg-7" style={{ padding: "25px" }} data-aos="fade-left">
              <div class="mb-4">
                {/* <h5 class="text-primary text-uppercase">About Us</h5> */}
                <h1 class="display-6 text-uppercase mb-0">
                  Discover Sahas Cricket Club: Where Passion and Excellence
                  Unite"
                </h1>
              </div>
              <h4 class="text-body mb-4"></h4>
              <p class="mb-4">
                Here passion meets purpose on the cricket pitch! Sahas Cricket
                Club is a renowned cricketing institution dedicated to providing
                top-notch training and coaching facilities for individuals aged
                14 to 29, as well as catering to the needs of older enthusiasts
                and fostering the growth of women's cricket. Our club serves as
                a hub for cricket lovers, offering a supportive environment
                where players of all ages and skill levels can come together to
                learn, grow, and excel in the sport they love. What sets Sahas
                Cricket Club apart is our unwavering commitment to excellence.
                Our team of experienced coaches brings a wealth of knowledge and
                expertise to the field, ensuring that every player receives
                personalized attention and guidance tailored to their skill
                level and aspirations. Whether you're a beginner looking to
                learn the basics or a seasoned player aiming to refine your
                technique, our comprehensive training programs are designed to
                help you reach your full potential.
              </p>

              <Link
                to={"/AboutUs"}
                class="btn btn-primary py-md-3 px-md-5 me-3"
                onClick={handleLinkClick}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <center>
          <h1 class="display-5 text-uppercase mb-0">Top Player Glories</h1>
        </center>

          {/* Player Carousel */}
        <div class="container-fluid programe position-relative mt-5" style={{ marginBottom: "135px", display: "flex", justifyContent: "center" , flexDirection:'column'}} id="achievements">
          <PlayerSwipper/>
        </div>

        <Initiatives_section
          style={{
            boxShadow: "0px 1px 48px -8px rgba(0,0,0,0.27)",
            paddingTop: "1px",
          }}
          id="Initiatives"
        >
          <div class="mb-5 text-center" style={{ marginTop: "50px" }}>
            {/* <h5 class="text-primary text-uppercase">Class Schedule</h5> */}
            <h1 class=" text-black display-5 text-uppercase mb-0">
              Our Initiatives
            </h1>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="col-md-4 mb-4"
                style={{
                  transition: "transform 0.3s",
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                
              >
                <div className="card" data-aos="zoom-in-up">
                  <div
                    className="card-image-container"
                    style={{
                      padding: "7px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img5}
                      alt=""
                      className="image-icon img-fluid rounded-top"
                      style={{ width: "95%", height: "300px", objectFit:'cover' }}
                    />
                  </div>
                  <div className="card-body" style={{ minHeight: "250px" ,height:'250px', maxHeight: '250px', overflow:'hidden'}}>
                    <h5 className="card-title">Men's Cricket Team</h5>
                    <p className="card-text">
                      Our men's cricket team is a powerhouse of talent and
                      passion, competing in various leagues and tournaments with
                      a spirit of sportsmanship and camaraderie.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 mb-4"
                style={{
                  transition: "transform 0.3s",
                  transform: isHovered1 ? "scale(1.03)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <div className="card" data-aos="zoom-in-up">
                  <div
                    className="card-image-container"
                    style={{
                      padding: "7px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img3}
                      alt=""
                      className="image-icon img-fluid rounded-top"
                      style={{ width: "95%", height: "300px", objectFit:'cover' }}
                    />
                  </div>
                  <div className="card-body" style={{ minHeight: "250px" ,height:'250px', maxHeight: '250px', overflow:'hidden'}}>
                    <h5 className="card-title">Women's Cricket Team</h5>
                    <p className="card-text">
                      {" "}
                      Our women's cricket team is breaking barriers and making
                      strides in the world of cricket. With dedicated coaching,
                      training, and support, we are paving the way for women to
                      shine on the cricket field.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 mb-4"
                style={{
                  transition: "transform 0.3s",
                  transform: isHovered2 ? "scale(1.03)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <div className="card" data-aos="zoom-in-up">
                  <div
                    className="card-image-container"
                    style={{
                      padding: "7px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img7}
                      alt=""
                      className="image-icon img-fluid rounded-top"
                      style={{ width: "95%", height: "300px", objectFit:'cover' }}
                    />
                  </div>
                  <div className="card-body" style={{ minHeight: "250px" ,height:'250px', maxHeight: '250px', overflow:'hidden'}}>
                    <h5 className="card-title">
                      Support Physically Disabled Student
                    </h5>
                    <p className="card-text">
                      Through our partnership with local organizations and
                      educational institutions, we provide financial assistance,
                      accessibility accommodations, and mentorship programs to
                      physically disabled students, empowering them to pursue
                      their educational and personal goals with confidence and
                      dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Initiatives_section>

        {/* counter section */}

        <Counter/>

        <MeetTeam/>
        <Facility/>

        <div style={{position:'fixed', top:'45%', left:'0.1%', zIndex:'99'}}>
          <Event_Btn/>
        </div>

        <div
          class="container mb-2 text-left"
          style={{ marginTop: "10px" }}
          id="gallery"
        >
          <br />
          <br />
          {/* <h5 class="text-primary text-uppercase">Class Schedule</h5> */}
          <div style={{ display: "flex", justifyContent:'space-between', alignItems:'center'}}>
            <GalleryHead style={{ width: "250px" }}>
              <h1 class="display-5  mb-0">
                Our <span style={{ color: "#fb5b21" }}>Gallery</span>
              </h1>
              <div className="stroke"></div>
            </GalleryHead>
            <div className="" style={{display:'flex', justifyContent:'center', }}>
                    <Link to={'/Gallery'} onClick={handleLinkClick} ><button className="btn btn-primary" style={{margin:'20px 0'}}>View More</button></Link>
          </div>
          </div>
        </div>

        <Gallery_Container>
          <div>
             <div>
             <div className="grid-container">
        {images.map((image, index) => (
          <div key={index} data-aos="fade-up">
            <img className={`grid-item grid-item-${index + 1}`} src={image.src} alt={`Image ${index + 1}`} />
            <p>{image.caption}</p>
          </div>
        ))}
      {/* </div> */}
                
              </div>
      {/* Uncomment the following section to add a link/button */}
      {/* <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn btn-primary" style={{ margin: '20px 0' }}>View More</button>
      </div> */}
    </div>
          
          {/* <div className="container" style={{display:'flex', justifyContent:'center', }}>
                    <Link to={'/Gallery'} onClick={handleLinkClick} ><button className="btn btn-primary" style={{margin:'20px 0'}}>View More</button></Link>
          </div> */}
          </div>
        </Gallery_Container>
        <br></br>
        <br></br>

        {/* <PlayerSwipper/> */}
        {/* <PlayerCarousel>
          <div className="carousel-container">
            <div id="playerCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid programe position-relative px-5 mt-5" style={{ marginBottom: "135px", display: "flex", justifyContent: "center", }}>
                    <div className="row g-5 gb-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: '30px' }}>
                      {players.map(player => (
                        <div className="col-lg-4 col-md-6" style={{ width: "20rem", height: "22rem" }} key={player.id}>
                          <PlayerCard image={player.image} name={player.name} description={player.description} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#playerCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#playerCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </PlayerCarousel> */}
      </div>
    </>
  );
}

const Gallery_Container = styled.div`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
  }
  h1 {
    text-align: center;
    color: coral;
    margin-bottom: 20px;
  }
  .grid-container {
    columns: 5 200px;
    column-gap: 1.5rem;
    width: 90%;
    margin: 0 auto;
    div {
      width: 150px;
      margin: 0 1.5rem 1.5rem 0;
      display: inline-block;
      width: 100%;
      border: solid 2px black;
      padding: 5px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      transition: all 0.25s ease-in-out;
      &:hover img {
        filter: grayscale(0);
      }
      &:hover {
        border-color: coral;
      }
      img {
        width: 100%;
        filter: grayscale(100%);
        border-radius: 5px;
        transition: all 0.25s ease-in-out;
      }
      p {
        margin: 5px 0;
        padding: 0;
        text-align: center;
        font-style: italic;
      }
    }
  }
`;

const Initiatives_section = styled.div`
  .card {
    margin: 0 20px;
    box-shadow: 0 0 1rem gray;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  padding: 0 1%;

  .popup-content{
    width: 100vw;
    height: 100vh;
    z-index: 300;
    position: relative;
  }

  .card {
    position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%);
    z-index: 301;
  width: 500px;
  height: 285px;
  background: transparent;
  border-radius: 20px;
  ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  filter: blur(20%);
  transition: 0.2s ease-in-out;
}
.image_co{
  width: 500px;
  height: 285px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.2s ease-in-out;
    border-radius: 20px;
    border: 2px solid white;
    filter: brightness(80%);
  }
}


.textBox {
  opacity: 1;
  position: absolute;
  /* gap: 15px; */
  transition: 0.2s ease-in-out;
  z-index: 3;
}

.textBox > .text {
  font-weight: bold;
}

.textBox > .head {
  font-size: 40px;
}

.head{
  text-shadow: 2px 2px 4px #000000;
}

.price {
  font-size: 17px;
  font-weight: bold;
}

.textBox > span {
  font-size: 12px;
  color: lightgrey;
}

/* .card:hover > .textBox {
  opacity: 1;
} */

.card:hover > .image_co {
  /* height: 65%; */
  /* filter: blur(7px); */
  /* animation: anim 3s infinite; */
}

.cross-icon{
  border: none;
  outline: none;
  color: transparent;
  background: white;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  top: -30px;
  right: 2px;

  i{
    font-size: 20px;
    color: black;
  }:hover{
    color: red;
  }
}


.card:hover {
  /* transform: scale(1.04); */
}

@media screen and (max-width: 768px) {
    .card{
      width: 98vw;
      height: max-content;
    }

    textBox > .head {
  font-size: 30px;
}

  .image_co{
  width: 90vw;
  height: 285px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.2s ease-in-out;
    border-radius: 20px;

  }
}
  }

`;

const Slide_show = styled.div`
  margin: 0 20px 50px 20px;

  /* Style.css */
  body {
    background: #f8f8f8;
    color: #2c3e50;
    font-family: "Source Sans Pro", sans-serif;
  }

  .card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    color: #666a73;
  }

  .card-carousel {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .card-carousel--overflow-container {
    overflow: hidden;
  }

  .card-carousel--nav__left,
  .card-carousel--nav__right {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-carousel--nav__left img,
  .card-carousel--nav__right img {
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
  }

  .card-carousel--nav__left[disabled],
  .card-carousel--nav__right[disabled] {
    opacity: 0.2;
  }

  .card-carousel--nav__left {
    /* transform: rotate(-135deg); */
  }
  /* 
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
} */

  .card-carousel--nav__right {
    /* transform: rotate(45deg); */
  }

  /* .card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
} */

  .card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
  }

  .card-carousel--card {
    margin: 0 10px;
    width: 400px;
    height: 300px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
      0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;
  }

  .card-carousel--card:first-child {
    margin-left: 0;
  }

  .card-carousel--card:last-child {
    margin-right: 0;
  }

  .card-carousel--card img {
    vertical-align: bottom;
    width: 400px;
    height: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
  }

  .card-carousel--card img:hover {
    opacity: 0.5;
  }

  .card-carousel--card--footer {
    border-top: 0;
    padding: 7px 15px;
  }

  .card-carousel--card--footer p {
    padding: 3px 0;
    margin: 0;
    margin-bottom: 2px;
    font-size: 19px;
    font-weight: 500;
    color: #2c3e50;
  }

  .card-carousel--card--footer p.tag {
    font-size: 11px;
    font-weight: 300;
    padding: 4px;
    background: rgba(40, 44, 53, 0.06);
    display: inline-block;
    position: relative;
    margin-left: 4px;
    color: #666a73;
  }

  .card-carousel--card--footer p.tag:before {
    content: "";
    float: left;
    position: absolute;
    top: 0;
    left: -12px;
    width: 0;
    height: 0;
    /* border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0; */
  }

  .card-carousel--card--footer p.tag.secondary {
    margin-left: 0;
    /* border-left: 1.45px dashed white; */
  }

  .card-carousel--card--footer p.tag.secondary:before {
    display: none !important;
  }

  .card-carousel--card--footer p.tag:after {
    content: "";
    position: absolute;
    top: 8px;
    left: -3px;
    float: left;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: white;
    box-shadow: -0px -0px 0px #004977;
  }

  @media screen and (max-width: 768px) {
    .card-carousel--card {
      width: 200px;
      height: 150px;
    }

    .card-carousel--card img {
      width: 200px;
      height: 100%;
    }
  }
`;

const GalleryHead = styled.div`
  .stroke {
    width: 200px;
    background: #fb5b21;
    height: 3px;
  }
  @media screen and (max-width: 768px) {
    .stroke {
      width: 32vw; /* Adjust width for smaller screens */
    }
  }
`;

const Card = styled.div`
  .card {
    width: 20rem;
    height: 21rem;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-front {
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }
`;

const MainCarousel = styled.div`

.carousel-caption{
  background: none;
}
  .swiper-container {
  position: relative;

  height: 600px;
  /* Add other styles as needed */
}
  .carousel-item {
    width: 100%;
    height: auto; /* Set initial height to auto */
  }
  .carousel-inner{
    height: 770px;
  }

  .swiper-image {
  width: 100vw;
  min-height: 600px;
  object-fit: cover;
  filter: grayscale(20%);
  filter: brightness(40%);
}


.caption {
  position: absolute;
  bottom: 50%;
  z-index: 200;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  width: 80%;
  /* Add other styles as needed */
}

  @media (max-width: 768px) {
    .carousel-item {
      height: 300px; /* Set height for smaller screens */
    }
    .carousel-inner {
      height: 300px; /* Set height for smaller screens */
    }
    .caption{
      width: 85vw;
      font-size: 1em;
    }
    .swiper-container{
      height: 250px;
    }
    .swiper-image{
      min-height: 250px;
    }
  }

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
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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

.swiper-backface-hidden .swiper-slide{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.swiper-button-prev, div.swiper-button-next{
  color: white;
  font-weight: bolder;
  /* background-color: white; */
}

div.swiper-button-next:after{
  font-size: 30px;
}

div.swiper-button-prev:after {
  font-size: 30px;
}

`;

const PlayerCarousel = styled.div `
@media (max-width: 768px) {
  /* .carousel-inner {
    overflow-x: auto;
    white-space: nowrap;
  }
  .carousel-inner .carousel-item {
    display: inline-block;
    vertical-align: top;
  } */
}

`;

