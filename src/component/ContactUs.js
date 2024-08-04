import axios from "axios";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowFooter_Context from "./ShowFooter_Context";
import 'aos/dist/aos.css'
import AOS from 'aos'
import { AdminContext } from "../Context/AdminContext";

const ContactUs = () => {
  AOS.init({
    duration: 650,
    once: true
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitDisable, setSubmitDissable] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const handleInput = (event) => {
    setInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   try {
  //     const response = await axios.post('http://localhost/test/contact.php', {
  //       name: input.name,
  //       email: input.email,
  //       message: input.message,
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });
  
  //     console.log('Server Response:', response.data);
  
  //     if (response.data.includes('Thank You')) {
  //       alert('Thank You for Contacting with Us! ');
  //     } else {
  //       alert('Failed to submit message. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Failed to submit message. Please try again.');
  //   }
  
  //   setInput({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  const handlepopup = () => {
    setPopUp(!popUp);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      setSubmitDissable(true);
      const response = await axios.post('http://localhost/test/contact.php', {
        name: input.name,
        email: input.email,
        message: input.message,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      console.log('Server Response:', response.data);
      

      if (response.data.includes('Thank You')) {
        setSubmitDissable(false);
        handlepopup();
        // alert('Thank You for Contacting with Us!');
      } else {
        setSubmitDissable(false);
        alert('Failed to submit message. Please try again.');
      }
    } catch (error) {
      setSubmitDissable(false);
      console.error('Failed to submit message. Please try again.');
    }
  
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  
  const{setIsAdmin} = useContext(AdminContext);
  useEffect(()=>{
    setIsAdmin(false)
  },[])

  return (
    <div className="container-fluid bg-white text-white py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <section>
            <div className="container" data-aos="fade-right">
              <h1 className="text-center">Contact Us</h1>
              <p className="text-center text-dark">
              Thank you for your interest in Sahas Cricket Club! Whether you're a budding cricketer seeking top-tier training or a seasoned enthusiast looking to hone your skills, we're here to support your cricketing journey every step of the way.
              </p>
              <p className="text-center text-dark">
                Any question or remarks? Just write us a message!
              </p>
              <form className="form" onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <div className="mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    onChange={handleInput}
                    value={input.name}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Enter a Valid Email Address"
                    name="email"
                    onChange={handleInput}
                    value={input.email}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    rows="4"
                    name="message"
                    onChange={handleInput}
                    value={input.msg}
                  ></textarea>
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary" disabled={submitDisable} onClick={handleSubmit}
                    style={submitDisable ?{opacity:"0.7"}:{opacity:'1'}}
                    >{!submitDisable ? 'Submit' : 'Submitting...'}</button>
                </div>
              </form>
              <p className="text-center mt-3 text-dark">
                For Joining us{' '}
                <Link to="/JoinUs" className="text-decoration-none">
                  Join us
                </Link>
              </p>
            </div>
          </section>
            {/* links */}
            <section style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div class="col-lg-5 px-5 ">
                        <div class="d-inline-flex align-items-center py-2" >
                            <a class="btn btn-dark btn-square rounded-circle me-2" href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-dark btn-square rounded-circle me-2" href="https://twitter.com/i/flow/login?redirect_after_login=%2FSahasCricket">
                                <i class="fab fa-twitter"></i>
                            </a>
                            {/* <a class="btn btn-light btn-square rounded-circle me-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a> */}
                            <a class="btn btn-dark btn-square rounded-circle me-2" href="https://www.instagram.com/p/Cv5EtKvPzRe/?hl=en">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-dark btn-square rounded-circle" href="https://www.youtube.com/@sahascricketclub">
                                <i class="fab fa-youtube"></i>
                            </a>
                              &nbsp;
                            <a class="btn btn-dark btn-square rounded-circle" href="https://wa.me/9834583306" target="_blank">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
          </section>
        </div>

        <div className="col-md-6" style={{maxWidth:'700px', height:'500px'}}>
          <div className="embed-responsive embed-responsive-16by9" data-aos="fade-left">
            <iframe
              title="Google Map"
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0978232948655!2d79.06705614221455!3d21.108665816119604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfc4d5197c9f%3A0x7c7ca67dad4d9e44!2sSahas%20cricket%20club!5e0!3m2!1sen!2sin!4v1708079454291!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, width:'100%', height:'500px', borderRadius:'7px' }}
            ></iframe>
          </div>
        </div>
      </div>

      {/* updated code */}
      {popUp && <PopUp>
        <div className="success" data-aos="fade-down">
          <div className="success__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              height="24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                fill="#393a37"
                d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="success__title">Successfully Submitted, Thank You for Contacting with Us !!</div>
          <div className="success__close" onClick={handlepopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 20 20"
              height="20"
            >
              <path
                fill="#393a37"
                d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              ></path>
            </svg>
          </div>
        </div>
      </PopUp>}

    </div>

    );
};

export default ContactUs;

const Contact_gallery = styled.section`
  .gallery {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    max-width: 1200px;
    margin: 10px auto;
    padding: 0 10px;
  }

  .gallery__item {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .gallery__item > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    transition: 0.2s ease-in-out;
  }

  .gallery__item > img:hover {
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }

  .gallery__item--hor {
    grid-column: span 2;
  }

  .gallery__item--vert {
    grid-row: span 3;
  }

  .gallery__item--lg {
    grid-column: span 2;
    grid-row: span 2;
  }
`;


const PopUp = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;


  .success {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #d1c1c1;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;

  text-align: center;

  position: fixed;
  top: 10px;
  right: 20%;
  /* border: 2px solid #76cc76; */
  @media only screen and (max-width: 768px) {
    right: 10%;
    }
}

.success__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-top: 6px;
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.success__icon path {
  fill: #393A37;
}

.success__title {
  font-weight: 500;
  font-size: 14px;
  color: #393A37;
}

.success__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
}

.success__close path {
  fill: #393A37;
}
`;