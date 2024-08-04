import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import vid1 from "./Videos/sahas_vid.mp4";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";
import { AdminContext } from "../Context/AdminContext";

const Gallery = () => {
  AOS.init({
    duration: 650,
    once: false,
  });
  const [data, setData] = useState([]);

  const [selectedRadio, setSelectedRadio] = useState("check1");
  const radioImageMap = {};
  const radioVideoMap = {};

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const [isLoading, setIsLoading] = useState(false);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowError(false);

    axios
      .get("http://localhost/test/viewgallery.php")
      .then((res) => {
        setData(res.data.phpresult);
        console.log("backend data", res.data.phpresult);
      })
      .catch((err) => {
        console.log(err.message);
        setShowError(true);
      })
      .finally(() => {
        // Set isLoading back to false after the request is completed (success or failure)
        setIsLoading(false);
      });
  }, []);

  
  const{setIsAdmin} = useContext(AdminContext);
  useEffect(()=>{
    setIsAdmin(false)
  },[])

  return (
    <Gallery_Container>
      <div
        className="container"
        style={{
          height: "60px",
          margin: "0 1px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "start",
        }}
      >
        <div
          className="col-md-9 ftco-animate"
          style={{ display: "flex", position: "relative", alignItems: "start" }}
        >
          <div className="">
            <span
              className=""
              style={{
                display: "flex",
                background: "#f1f1f1",
                padding: "1px 20px 7px 20px",
                alignItems: "center",
              }}
            >
              <span className="mr-2">
                <Link to={"/"}>
                  <span>
                    Home <i className="fa fa-chevron-right"></i>
                  </span>
                </Link>
              </span>{" "}
              <span className="a">
                Gallery <i className="fa fa-chevron-right"></i>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <input
          type="radio"
          name="photos"
          id="check1"
          checked={selectedRadio === "check1"}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="photos"
          id="check2"
          checked={selectedRadio === "check2"}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="photos"
          id="check3"
          checked={selectedRadio === "check3"}
          onChange={handleRadioChange}
        />

        <div className="container">
          <h1>OUR PHOTOS GALLERY</h1>
          <p>
            Step into the Sahas Cricket Club gallery and immerse yourself in a
            world where passion meets excellence. From our top-notch training
            facilities and personalized coaching sessions to the camaraderie of
            our vibrant community and empowerment of women in cricket, every
            image tells a story of dedication and skill. Witness the precision
            of our bowling machine and the transformative impact of personal
            coaching, all coming together to create a space where talents
            flourish and cricketing dreams are realized.
          </p>
          <br />

          <div className="top-content">
            <h3>Photos Gallery</h3>

            <label
              htmlFor="check1"
              className={selectedRadio === "check1" ? "active" : ""}
            >
              All Photos
            </label>
            {/* <label htmlFor="check2" className={selectedRadio === 'check2' ? 'active' : ''}>Newspaper Highlights</label> */}
            <label
              htmlFor="check3"
              className={selectedRadio === "check3" ? "active" : ""}
            >
              Videos
            </label>
          </div>

          {isLoading && <Loader >
            <div class="loader"></div>
          </Loader>}

          {showError && <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
            <b style={{color:'#d86271', textAlign:'center'}}>Error Occurred! No Images To Show.</b>
          </div>}

          <div className="photo-gallery">

            {selectedRadio === "check1" &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="pic"
                  style={{
                    boxShadow: "-11px 14px 11px -9px rgba(0,0,0,0.29)",
                    borderRadius: "7px",
                    border: "1px solid gray",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {item.Image.endsWith(".mp4") ? (
                    <video
                      src={`http://localhost/test/ugallery/${item.Image}`}
                      alt={`sahas${index + 1}`}
                      controls
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <img
                      src={`http://localhost/test/ugallery/${item.Image}`}
                      alt={`sahas${index + 1}`}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                        borderRadius: "7px",
                      }}
                    />
                  )}
                </div>
              ))}
            {/* 
{selectedRadio === 'check2' && data.map((item, index) => (
  <div className="pic" key={index} style={{ boxShadow: '-11px 14px 11px -9px rgba(0,0,0,0.29)', borderRadius: '7px' }} onClick={() => handleImageClick(`http://localhost/test/ugallery/${item.Image}`)}>
    <div data-aos="zoom-in" data-aos-duration="1000">
      {item.Image.endsWith('.jpg') && <img src={`http://localhost/test/ugallery/${item.Image}`} alt={item.Image} style={{ borderRadius: '7px' }} />}
    </div>
  </div>
))} */}

            {selectedRadio === "check3" &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="pic"s
                  style={{
                    boxShadow: "-11px 14px 11px -9px rgba(0,0,0,0.29)",
                    borderRadius: "7px",
                    marginTop: "-90",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {item.Image.endsWith(".mp4") && (
                    <video
                      src={`http://localhost/test/ugallery/${item.Image}`}
                      alt={`sahas${index + 1}`}
                      controls
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                        borderRadius: "7px",
                      }}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <FullScreenImageModal onClick={handleCloseModal}>
          <img src={selectedImage} alt="Full Screen" />
        </FullScreenImageModal>
      )}
    </Gallery_Container>
  );
};

export default Gallery;

const FullScreenImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  img {
    max-width: 90%;
    max-height: 90%;
  }
`;

const Gallery_Container = styled.div`
  margin: 0 0 40px 0;

  .photo-gallery {
    display: grid;
    /* display: grid; */
    grid-template-columns: repeat(
      auto-fill,
      minmax(400px, 1fr)
    ); /* Adjust the column width as needed */
    grid-gap: 10px; /* Adjust the gap between grid items */
  }

  .pic img {
    width: 100%;
    height: 400px; /* Maintain aspect ratio */
    object-fit: contain;
  }

  .active {
    color: #fb5b21;
  }

  input {
    display: none;
  }
  .container {
    width: 100%;
    text-align: center;
  }
  h1 {
    font-weight: normal;
    font-size: 2rem;
    position: relative;
    margin: 40px 0;
  }
  h1::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: crimson;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    animation: animate 4s linear infinite;
  }
  @keyframes animate {
    0% {
      width: 100px;
    }
    50% {
      width: 200px;
    }
    100% {
      width: 100px;
    }
  } /* Base styles */
  .top-content {
    background-color: rgb(243, 243, 243);
    width: 90%;
    margin: 0 auto 20px auto;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 3px 3px 5px lightgray;
  }

  h3 {
    height: 100%;
    background-color: rgb(221, 221, 221);
    line-height: 60px;
    padding: 0 50px;
    color: white;
  }

  label {
    display: inline-block;
    height: 100%;
    margin: 0 20px;
    line-height: 60px;
    font-size: 18px;
    color: gray;
    cursor: pointer;
    transition: color 0.5s;
    display: flex;
    align-items: center;
    /* white-space: nowrap;  */
  }

  label:hover {
    color: black;
  }

  /* Responsive styles */
  @media only screen and (max-width: 768px) {
    .top-content {
      width: 100%;
      border-radius: 0;
    }

    h3 {
      padding: 0 17px;
    }

    label {
      font-size: 13px;
      margin: 5px; /* Adjust margin for smaller screens */
      line-height: normal;
    }
  }

  /* Add more media queries as needed for different screen sizes */

  /* 
.photo-gallery {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}
.pic {
    position: relative;
    height: 230px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px lightgray;
    cursor: pointer;
    transition: .5s;
}
.pic img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: .5s;
} */
  /* .pic::before {
    content: "-";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 22px;
    font-weight: bold;
    width: 100%;
    margin-top: -100px;
    opacity: 0;
    transition: .3s;
    transition-delay: .2s;
    z-index: 1;
} */
  /* .pic::after{
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    height: 0;
    background-color: rgb(0,0,0,.4);
    transition: .3s;
} */
  .pic:hover::after {
    height: 100%;
  }
  .pic:hover::before {
    margin-top: 0;
    opacity: 1;
  }
  #check1:checked ~ .container .photo-gallery .pic {
    opacity: 1;
    transform: scale(1);
    position: relative;
    transition: 0s;
  }
  #check2:checked ~ .container .photo-gallery .AllPhotos2 {
    transition: scale(1);
    opacity: 1;
    position: relative;
    /* transition: .5s; */
  }
  #check2:checked ~ .container .photo-gallery .AllPhotos3,
  #check2:checked ~ .container .photo-gallery .AllPhotos4 {
    opacity: 0;
    transition: scale(0);
    position: absolute;
    /* transition: .5s; */
  }

  .gallery__item--hor {
    grid-column: span 2;
  }

  .gallery__item--vert {
    grid-row: span 2;
  }

  .gallery__item--lg {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media screen and (max-width: 768px) {
    .photo-gallery {
      grid-template-columns: repeat(
        auto-fill,
        minmax(300px, 1fr)
      ); /* Adjust column width for smaller screens */
      grid-gap: 5px; /* Adjust gap between grid items for smaller screens */
    }
  }

  /* Media query for medium screens */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .photo-gallery {
      grid-template-columns: repeat(
        auto-fill,
        minmax(350px, 1fr)
      ); /* Adjust column width for medium screens */
      grid-gap: 8px; /* Adjust gap between grid items for medium screens */
    }
  }

  /* Media query for large screens */
  @media screen and (min-width: 1025px) {
    .photo-gallery {
      grid-template-columns: repeat(
        auto-fill,
        minmax(400px, 1fr)
      ); /* Adjust column width for large screens */
      grid-gap: 10px; /* Adjust gap between grid items for large screens */
    }
  }
`;

const Loader = styled.div`
/* HTML: <div class="loader"></div> */
width: 100%;
display: flex;
justify-content: center;
align-items: center;

.loader {
  width: 30px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background:
    linear-gradient(0deg ,rgb(0 0 0/50%) 30%,#0000 0 70%,rgb(0 0 0/100%) 0) 50%/8% 100%,
    linear-gradient(90deg,rgb(0 0 0/25%) 30%,#0000 0 70%,rgb(0 0 0/75% ) 0) 50%/100% 8%;
  background-repeat: no-repeat;
  animation: l23 1s infinite steps(12);
}
.loader::before,
.loader::after {
   content: "";
   grid-area: 1/1;
   border-radius: 50%;
   background: inherit;
   opacity: 0.915;
   transform: rotate(30deg);
}
.loader::after {
   opacity: 0.83;
   transform: rotate(60deg);
}
@keyframes l23 {
  100% {transform: rotate(1turn)}
}
`;