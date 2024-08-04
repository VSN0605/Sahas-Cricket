// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// import backgroundImage from './images/bg-img.jpeg';
// import Event_card from './Event_card';

// import AOS from 'aos';
// import axios from 'axios'; // Import axios for making HTTP requests

// const Events = () => {
//     AOS.init({
//         duration: 650,
//         once: false,
//       });

//     const [filter, setFilter] = useState({
//         upcoming: true,
//         important: true,
//         search: ''
//       });

//       const [searchIsFocused, setSearchIsFocused] = useState(false);

//       const eventList = [
//         {
//           title: 'Scuba Merit Badge',
//           date: 'August 28 | 8am - 3pm',
//           desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
//           address: '503 Harbor Blvd, Destin, FL',
//           pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
//           month: 'Aug',
//           day: '28',
//           important: true,
//           upcoming: true
//         },
//         {
//           title: 'Scuba Merit Badge',
//           date: 'August 28 | 8am - 3pm',
//           desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
//           address: '503 Harbor Blvd, Destin, FL',
//           pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
//           month: 'Aug',
//           day: '28',
//           important: true,
//           upcoming: true
//         },
//         {
//           title: 'Scuba Merit Badge',
//           date: 'August 28 | 8am - 3pm',
//           desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
//           address: '503 Harbor Blvd, Destin, FL',
//           pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
//           month: 'Aug',
//           day: '28',
//           important: true,
//           upcoming: true
//         },

//         {
//             title: 'Scuba Merit Badge',
//             date: 'August 28 | 8am - 3pm',
//             desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
//             address: '503 Harbor Blvd, Destin, FL',
//             pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
//             month: 'Aug',
//             day: '28',
//             important: true,
//             upcoming: true
//           },
//           {
//             title: 'Scuba Merit Badge',
//             date: 'August 28 | 8am - 3pm',
//             desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
//             address: '503 Harbor Blvd, Destin, FL',
//             pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
//             month: 'Aug',
//             day: '28',
//             upcoming: false,
//             important: false,
//           },
//           {
//             title: 'Black Forest Camp',
//             date: 'March 3 - March 5, 2018',
//             desc: 'Weekend campout in the Black Forest',
//             address: 'Black Forest, Baden-Württemberg, DE',
//             pic: 'https://images.unsplash.com/photo-1501703979959-797917eb21c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4132e8087781addd674e137a9f596dc&auto=format&fit=crop&w=889&q=80',
//             month: 'Mar',
//             day: '03',
//             important: false,
//             upcoming: true
//         },
//         {
//             title: 'Artic Campout',
//             date: 'December 14 - 18, 2018',
//             desc: 'Campout in the artic. Freeze your toes off. See cute penguins.',
//             address: 'Barrow, Alaska, US',
//             pic: 'https://images.unsplash.com/photo-1498279898147-67f541d32b6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af428042e69ac5152855548d8b4f7989&auto=format&fit=crop&w=667&q=80',
//             month: 'Dec',
//             day: '14',
//             important: false,
//             upcoming: false
//         },
//         {
//             title: 'Sailing',
//             date: 'April 23 | 11am - 7pm',
//             desc: 'Sail the high seas. Get lost in the Bermuda Triangle.',
//             address: 'Second star to the right, and straight on till morning',
//             pic: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9193225514494f3e830d444d4ae58819&auto=format&fit=crop&w=667&q=80',
//             month: 'Apr',
//             day: '23',
//             important: false,
//             upcoming: false
//         }
//         // Add more event objects here as needed
//       ];

//       const filterEvents = (event) => {
//         let conditions = [true, true, true];
//         conditions[0] = event.upcoming === filter.upcoming;
//         if (filter.important) conditions[1] = event.important === filter.important;
//         if (filter.search.trim() !== '') conditions[2] = event.title.toLowerCase().includes(filter.search.trim().toLowerCase());
//         return conditions.every(condition => condition === true);
//       };

//       const handleSearchFocus = () => {
//         setSearchIsFocused(true);
//       };

//       const handleSearchBlur = () => {
//         setSearchIsFocused(false);
//       };

//       const handleFilterChange = (value) => {
//         switch (value) {
//           case 'important':
//             setFilter({ ...filter, upcoming: true, important: true });
//             break;
//           case 'upcoming':
//             setFilter({ ...filter, upcoming: true, important: false });
//             break;
//           case 'finished':
//             setFilter({ ...filter, upcoming: false, important: false });
//             break;
//           default:
//             break;
//         }
//       };

//   return (
//     <div>
//       <Abc>
//         <div id="aboutid">
//           <section
//             className="hero-wrap hero-wrap-2"
//             style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(80%)', backgroundAttachment:'fixed' }}
//             data-aos="fade-up"
//             data-aos-duration="2000"
//           >
//             <div className="overlay"></div>
//             <div className="overlay-2"></div>
//             <div className="container">
//               <div className="row no-gutters slider-text align-items-center justify-content-center image_content">
//                 <div className="col-md-9 ftco-animate pb-5 text-center">
//                   <p className="breadcrumbs">
//                     <span className="mr-2">
//                       <Link to={'/'}>
//                         Home <i className="fa fa-chevron-right"></i>
//                       </Link>
//                     </span>{" "}
//                     <span>
//                       Events <i className="fa fa-chevron-right"></i>
//                     </span>
//                   </p>
//                   <h1 className="mb-0 bread">Events</h1>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <br />
//           <br />
//         </div>
//       </Abc>

//       <Event_Content>
//       <div className='container'>
//       <div className='flex-bar'>
//       <div className={`search-bar ${searchIsFocused ? 'elevation-6' : 'elevation-3'}`}>
//         <input
//           placeholder="Search"
//           onFocus={handleSearchFocus}
//           onBlur={handleSearchBlur}
//           type="text"
//           value={filter.search}
//           onChange={(e) => setFilter({ ...filter, search: e.target.value })}
//         />
//       </div>
//       <div className="upcoming-events-filter-group">
//         <input
//           type="radio"
//           id="importantSelect"
//           name="events-select"
//           value="important"
//           checked={filter.important && filter.upcoming}
//           onChange={() => handleFilterChange('important')}
//         />
//         <label htmlFor="importantSelect">Important</label>
//         <input
//           type="radio"
//           id="upcomingSelect"
//           name="events-select"
//           value="upcoming"
//           checked={!filter.important && filter.upcoming}
//           onChange={() => handleFilterChange('upcoming')}
//         />
//         <label htmlFor="upcomingSelect">Upcoming</label>
//         <input
//           type="radio"
//           id="finishedSelect"
//           name="events-select"
//           value="finished"
//           checked={!filter.upcoming}
//           onChange={() => handleFilterChange('finished')}
//         />
//         <label htmlFor="finishedSelect">Finished</label>
//       </div>
//       </div>
//       <ul className="event-card-list" name="fade-in">
//         {eventList.filter(filterEvents).map((event, index) => (
//           <li key={index}>
//             {/* Your event card component here */}
//             <Event_card event={event}/>
//           </li>
//         ))}
//       </ul>
//     </div>
//       </Event_Content>
//     </div>
//   )
// }

// export default Events

// const Abc = styled.div`
//   .hero-wrap {
//     width: 100%;
//     height: 900px;
//     position: relative;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center center;
//     z-index: 0;
//   }
//   @media (max-width: 991.98px) {
//     .hero-wrap {
//       background-position: center center !important;
//     }
//   }
//   .hero-wrap.hero-wrap-2 {
//     height: 100%;
//     position: relative;
//     background-position: center center !important;
//   }
//   .hero-wrap.hero-wrap-2 .overlay {
//     width: 100%;
//     opacity: 0.2;
//     background: #000000 !important;
//     z-index: -1;
//   }
//   .hero-wrap.hero-wrap-2 .overlay-2 {
//     opacity: 0.3;
//   }
//   .hero-wrap.hero-wrap-2 .slider-text {
//     height: 500px;
//   }
//   .hero-wrap .overlay {
//     z-index: -1;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     content: "";
//     opacity: 0;
//     background: #000000;
//   }
//   .hero-wrap .overlay-2 {
//     z-index: -1;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     content: "";
//     opacity: 0.5;
//     background: #9acb56;
//     background: -moz-linear-gradient(
//       top,
//       #9acb56 0%,
//       rgba(255, 255, 255, 0) 71%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     background: -webkit-gradient(
//       left top,
//       left bottom,
//       color-stop(0%, #9acb56),
//       color-stop(71%, rgba(255, 255, 255, 0)),
//       color-stop(100%, rgba(255, 255, 255, 0))
//     );
//     background: -webkit-linear-gradient(
//       top,
//       #9acb56 0%,
//       rgba(255, 255, 255, 0) 71%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     background: -o-linear-gradient(
//       top,
//       #9acb56 0%,
//       rgba(255, 255, 255, 0) 71%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     background: -ms-linear-gradient(
//       top,
//       #9acb56 0%,
//       rgba(255, 255, 255, 0) 71%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     background: -webkit-gradient(
//       linear,
//       left top,
//       left bottom,
//       from(#9acb56),
//       color-stop(71%, rgba(255, 255, 255, 0)),
//       to(rgba(255, 255, 255, 0))
//     );
//     background: linear-gradient(
//       to bottom,
//       #9acb56 0%,
//       rgba(255, 255, 255, 0) 71%,
//       rgba(255, 255, 255, 0) 100%
//     );
//     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9acb56', endColorstr='#ffffff', GradientType=0 );
//   }
//   .hero-wrap .slider-text {
//     height: 90px;
//     color: rgba(255, 255, 255, 0.904);
//     z-index: 3;
//   }
//   .hero-wrap .slider-text .subheading {
//     font-size: 24px;
//     color: rgba(255, 255, 255, 0.904);
//     display: inline-block;
//     margin-bottom: 1px;
//     font-family: "Reenie Beanie", cursive;
//   }
//   .hero-wrap .slider-text h1 {
//     font-size: 60px;
//     color: #fff;
//     line-height: 1;
//     font-weight: 300;
//     font-family: "Poppins", Arial, sans-serif;
//   }
//   @media (max-width: 991.98px) {
//     .hero-wrap .slider-text h1 {
//       font-size: 36px;
//     }
//     .image_content{
//         max-height: 400px;
//     }
//   }
//   .hero-wrap .slider-text p {
//     font-weight: 400;
//   }
//   .hero-wrap .slider-text p strong {
//     font-weight: 700;
//   }
//   .hero-wrap .slider-text p strong a {
//     color: #000000;
//   }
//   .hero-wrap .slider-text .breadcrumbs {
//     font-size: 18px;
//     margin-bottom: 20px;
//     z-index: 99;
//     font-weight: 500;
//     text-transform: uppercase;
//     color: rgba(255, 255, 255, 0.904);
//     font-family: "Reenie Beanie", cursive;
//   }
//   .hero-wrap .slider-text .breadcrumbs span {
//     color: rgba(255, 255, 255, 0.904);
//   }
//   .hero-wrap .slider-text .breadcrumbs span i {
//     color: rgba(255, 255, 255, 0.904);
//     font-size: 12px;
//   }
//   .hero-wrap .slider-text .breadcrumbs span a {
//     color: rgba(255, 255, 255, 0.904);
//   }
//   .hero-wrap .slider-text .breadcrumbs span a:hover,
//   .hero-wrap .slider-text .breadcrumbs span a:focus {
//     color: #6cae22;
//   }
//   .hero-wrap .slider-text .breadcrumbs span a:hover i,
//   .hero-wrap .slider-text .breadcrumbs span a:focus i {
//     color: #6cae22;
//   }
//   .hero-wrap .slider-text .bread {
//     font-weight: 300;
//     color: #fff;
//     font-size: 50px;
//     text-transform: capitalize;
//   }
// `;

// const Event_Content = styled.div `
//     /* Event Card List CSS */
//     .flex-bar {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     /* background-color: #F07077; */
// }

// .event-card-list {
//     margin-top: 4em;
//     display: flex;
//     padding-left: 0;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
// }

// .event-card-list li {
//     list-style: none;
//     margin: 2em 0;
//     width: 600px; /* Adjusted width */
//     font-family: sans-serif;
// }

// .event-card {
//     overflow: hidden;
//     width: 600px; /* Adjusted width */
//     border-radius: 0.3em;
//     box-sizing: border-box; /* Added */
//     padding: 0 1em; /* Added */
// }

// .event-card img {
//     width: 250px; /* Adjusted width */
//     height: 180px; /* Changed height to auto for aspect ratio */
//     object-fit: cover;
// }

// .event-card .name {
//     font-size: 2.3em;
//     font-weight: 400;
// }

// .event-card .name a {
//     text-decoration: none;
// }

// .event-card .date {
//     font-size: 1.4em;
//     font-weight: 400;
//     color: #6D6D6D;
// }

// .event-card .location {
//     font-size: 1em;
//     color: #757575;
// }

// .event-card .location i {
//     font-size: 1.1em;
//     padding-right: 0.3em;
//     margin-bottom: 0.085em;
// }

// .event-card .desc {
//     margin-bottom: 0.2em;
//     font-size: 1.16em;
//     padding-left: 0.1em;
// }

// .event-card .date-ribbon {
//     position: absolute;
//     top: 0;
//     left: 1em;
//     background: #FE453E;
//     color: #fff;
//     padding: 0.2em 1em;
//     padding-bottom: 0;
//     border-radius: 0;
// }

// .event-card .date-ribbon::before,
// .event-card .date-ribbon::after {
//     content: '';
//     position: absolute;
//     top: 100%;
//     width: 50%;
//     height: 30px;
// }

// .event-card .date-ribbon::before {
//     left: 0;
//     border-left: solid 2em #FE453E;
//     border-top: solid 15px #FE453E;
//     border-bottom: solid 15px transparent;
//     border-right: solid 2em transparent;
// }

// .event-card .date-ribbon::after {
//     right: 0;
//     border-right: solid 2em #FE453E;
//     border-top: solid 15px #FE453E;
//     border-bottom: solid 15px transparent;
//     border-left: solid 2em transparent;
// }

// .event-card .date-ribbon h2 {
//     font-weight: 500;
//     font-size: 1.15em;
//     letter-spacing: 0.07em;
//     text-align: center;
// }

// .event-card .date-ribbon h1 {
//     text-align: center;
//     font-weight: 400;
//     font-size: 2.45em;
//     margin-top: -0.09em;
//     line-height: 1em;
// }

// .wrapme {
//     width: 70%;
//     max-width: 650px;
//     margin: 0 auto; /* Centering the container */
// }

// .search-bar {
//     margin-top: 10px;
//     background: #fff;
//     padding: 1em;
//     width: 100%; /* Adjusted width */
//     max-width: 600px; /* Added max-width for responsiveness */
//     border-radius: 10em;
//     box-shadow: 1px 2px 20px -3px rgba(0,0,0,0.4);
//     transition: box-shadow 300ms ease;
// }

// .search-bar input {
//     width: 100%;
//     border-style: none;
//     color: inherit;
//     background-color: transparent;
//     padding-left: 1em;
//     font-size: 1.3em;
// }

// .search-bar input:focus {
//     outline: none;
// }

// .upcoming-events-filter-group {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     /* padding: 0 2.4em; */
//     margin-top: 20px;
//     position: relative;
//     display: inline-block;
// }

// .upcoming-events-filter-group input {
//     visibility: hidden;
//     opacity: 0;
//     margin: 0 30px;
//     position: absolute;
//     top: -999;
//     left: -999;
// }

// .upcoming-events-filter-group label {
//     cursor: pointer;
//     font-size: 1.3em;
//     margin: 0 0.3em;
//     color: #9E9E9E;
//     transition: color 300ms ease;
// }

// .upcoming-events-filter-group input:checked+label {
//     color: #F07077;
// }

// .upcoming-events-filter-group .underline {
//     position: absolute;
//     bottom: -3px;
//     left: 2.73em;
//     height: 2px;
//     width: 6em;
//     background: #F07077;
//     transition: 300ms ease;
// }

// .upcoming-events-filter-group #importantSelect:checked~.underline {
//     left: 2.73em;
//     width: 5.7em;
// }

// .upcoming-events-filter-group #upcomingSelect:checked~.underline {
//     left: 9.45em;
//     width: 6em;
// }

// .upcoming-events-filter-group #finishedSelect:checked~.underline {
//     left: calc(100% - 2.7em - 5em);
//     width: 5em;
// }

// @media (max-width: 768px) {
//     .event-card{
//         width: 100%;
//     }
//     .event-card-list {
//         width: 100%;

//     }

//     .event-card-content{
//         flex-direction: column;
//     }

//     .event-card img {
//         width: 100%;
//     }

//     .event-card .name {
//         font-size: 1.8em;
//     }

//     .event-card .date {
//         font-size: 1.2em;
//     }

//     .event-card .desc {
//         font-size: 1em;
//     }

//     .event-card .date-ribbon h1 {
//         font-size: 2em;
//     }

//     .event-card .date-ribbon h2 {
//         font-size: 1em;
//     }
//     .search-bar{
//         max-width: 100%;
//     }
// }
// `;

import styled from "styled-components";
import img1 from "./images/Bas-Bat.jpg";
import backgroundImage from "./images/bg-img.jpeg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios"; // Import axios for making HTTP requests

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import img from "./images/error-message.png";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Event_card from "./Event_card";
import { AdminContext } from "../Context/AdminContext";


const Products = () => {
  AOS.init({
    duration: 650,
    once: false,
  });

  const [submitDisable, setSubmitDissable] = useState(false);
  const [products, setProducts] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    quantity: "",
  });
  const [finalPrice, setFinalPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [showFP, setShowFP] = useState(false);
  const [paymentFormSubmitted, setPaymentFormSubmitted] = useState(false);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await axios.get("http://localhost/test/viewevent.php");
        setProducts(result.data.phpresult || []); // Ensure that result.data.phpresult is an array
        console.log(result.data.phpresult);
      } catch (error) {
        console.error("Error loading products:", error);
        setShowError(true);
      }
    };

    loadProducts();
  }, []);

  const handleClick = () => {
    toast("Submitted Successfully !!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleClick1 = () => {
    toast.warn("Fill all the Required Fields !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  
  const{setIsAdmin} = useContext(AdminContext);
  useEffect(()=>{
    setIsAdmin(false)
  },[])


  return (
    <>
      <Abc>
        <div id="aboutid">
          <section
            className="hero-wrap hero-wrap-2"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              filter: "brightness(80%)",
            }}
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
                      <Link to={"/"}>
                        Home <i className="fa fa-chevron-right"></i>
                      </Link>
                    </span>{" "}
                    <span>
                      Events <i className="fa fa-chevron-right"></i>
                    </span>
                  </p>
                  <h1 className="mb-0 bread">Events</h1>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
        </div>
      </Abc>
      <ProductContainer>
        <div className="container">
          {!showError && (
            <div className="row">
            <div style={{ display: "flex", justifyContent: "start" }}>
            <GalleryHead style={{ width: "380px" }}>
              <h1 class="display-5  mb-0">
                Upcomming <span style={{ color: "#fb5b21" }}>Events</span>
              </h1>
            </GalleryHead>
          </div>

              <div className="cards">
                {/* {products.map((product) => (
                  <div
                    className="card"
                    key={product.id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    
                  >
                    <img
                      src={`http://localhost/test/event/${product.Image}`}
                      alt="Product"
                    />
                    <div>
                      <h1 style={{ textAlign: "center" }}>{product.name}</h1>
                      <p className="product-Description">
                        {product.Description}
                      </p>
                      <div className="Location">
                        <strong>Location</strong>:{" "}
                        <span>{product.location}</span>
                      </div>
                      <div className="date">
                        <strong>Date</strong>: <span>{product.date}</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      ></div>
                    </div>
                  </div>
                ))} */}
                
                {products.map((product) => (
                    <Event_card key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {showError && (
            <div
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <img src={img} alt="" style={{ width: "60px", height: "60px" }} />
              <center>
                <h4 style={{ color: "#d86271" }}>
                  Sorry, No Upcomming Events Available !
                </h4>
              </center>
            </div>
          )}
        </div>
      </ProductContainer>
    </>
  );
};

export default Products;

const ProductContainer = styled.div`
  .container {
    width: 90%;
    margin: 0 auto;
    padding: 2rem;
    background: #e2e8f0;
  }
  .card {
    img {
      width: 100%;
      // max-height: 200px;
      // min-height:200px;
      height: 250px;
    }
  }
  .cards {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-family: sans-serif;
  }
  .cards .card {
    /* width: 30%; */
    padding: 1rem;
    /* 
    min-width: 280px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px 0px;
    background: white;
    /* resize: horizontal; */
    /* overflow: auto; */
    margin: 1rem auto;
  }
  .cards .card h1 {
    font-size: 1rem;
    margin: 1rem 0;
  }
  .card p {
    font-size: 1 rem;
    max-height: 3.6rem; /* Approximately 3 lines of text with 0.8rem font size and 1.2 line-height */
    overflow: hidden;
    white-space: normal; /* Allow wrapping within the container */
    line-height: 1.2; /* Adjust line height according to your font size */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limit the number of lines to 3 */
    -webkit-box-orient: vertical;
  }

  .cards .card button {
    /* margin: 1rem 0;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    border: 0;
    background: #c53030;
    color: white; */
  }

  .cards .card img:hover {
    /* transition: 0.3s;
    transform: scale(1.04);
    transition-timing-function: ease-in-out; */
  }
`;

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

const PaymentForm = styled.div`
  .payment-form {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .payment-form h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .payment-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .payment-form input[type="text"],
  .payment-form input[type="email"],
  .payment-form textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .payment-form input[type="text"]:read-only {
    background-color: #eee;
  }

  .card__wrapper {
    margin-bottom: 10px;
  }

  .card__counter {
    display: flex;
    align-items: center;
  }

  .card__btn {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    cursor: pointer;
  }

  .card__btn:hover {
    background-color: #e0e0e0;
  }

  .card__counter-score {
    padding: 0 10px;
  }

  .btn {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #fb5b21;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    opacity: 1;
  }

  .btn:hover {
    opacity: 0.7;
  }

  /* Modal container */
  .modalC {
    position: fixed;
    z-index: 9000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* Modal content */
  .modal-content {
    background-color: #fefefe;
    margin: 2% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 90%; /* Use percentage for responsiveness */
    max-width: 500px; /* Limit maximum width */
    border-radius: 5px;
    position: relative;

    display: flex;
    justify-content: center;
  }

  /* Close button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 1px;
    right: 15px;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .payment-form {
    max-width: 400px;
    /* margin: 0 10%; */
  }

  .payment-form h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .payment-form form label {
    display: block;
    margin-bottom: 5px;
  }

  .payment-form form input[type="text"],
  .payment-form form input[type="email"],
  .payment-form form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .payment-form form button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #fb5b21;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .payment-form form button[type="submit"]:hover {
    background-color: white;
    color: #fb5b21;
    border: 2px solid #fb5b21;
  }

  .quantity {
    display: flex;
    gap: 5px;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 10px;

    input {
      width: 60px;
      padding: 10px;
      /* margin-bottom: 15px; */
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      /* align-self: center; */
    }
  }

  .card__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .card__counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 5px;
    background: #f7f7f7;
    border-radius: 50px;
    border: 1px solid #fb5b21;
  }

  .card__counter-score,
  .card__btn {
    font-weight: 700;
    font-size: 22px;
    color: #fb5b21;
    /* color: var(--main-color); */
    text-align: center;
  }

  .card__btn {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    color: #fb5b21;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__btn-plus {
    background: var(--bg-color);

    border: none;
  }

  @media (max-width: 786) {
    /* Adjust modal content width for smaller screens */
    .modal-content {
      width: 90%;
      margin: 60px 0px;
    }
    .close {
      right: 4px;
    }
  }

  @media (max-width: 400px) {
    /* Further adjust modal content width for even smaller screens */
    .modal-content {
      width: 100%;
      /* margin: 10px; */
    }
    .close {
      right: 1px;
    }
  }
`;

const Card = styled.div   `
.card {
  /* background-color: rgba(0, 0, 0, 0.6); */
  position: relative;
  width: 600px;
  height: 250px;
  max-width: 70vw;
  border-radius: 10px;
  display: flex;
  padding: 10px 30px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.heading {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  position: relative;
  z-index: 1;
  margin-bottom: 0px;
}

.para {
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  /* line-height: 1.4; */
  overflow: hidden;
  white-space: normal; /* Allow wrapping within the container */
  line-height: 1.2; /* Adjust line height according to your font size */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit the number of lines to 3 */
  -webkit-box-orient: vertical;
  z-index: 1;
  max-width: 70%;
}



.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.background-div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 0;

  /* Set background size and position */
  background-size: cover;
  background-position: center;

  /* Set opacity */
  opacity: 0.7; /* You can adjust the opacity value from 0 to 1 */
}

.card:hover .overlay {
  opacity: 1;
  pointer-events: auto;
}

.card .card-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  border: none;
  opacity: 0;
  scale: 0;
  transform-origin: 0 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover .card-btn {
  opacity: 1;
  scale: 1;
}

.card .card-btn:hover {
  box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.3);
}

.card .card-btn:active {
  scale: 0.95;
}

.overlay::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.card:hover .overlay::after {
  transform: translate(-50%, -50%) scale(2);
}

@media (max-width: 786) {
    .card{
      max-width: 60vw;
    }
  }

`;

const GalleryHead = styled.div`
  div {
    width: 130px;
    background: #fb5b21;
    height: 3px;
    margin-left: 16vw;
  }
  @media screen and (max-width: 768px) {
    div {
      width: 32vw; /* Adjust width for smaller screens */
    }
  }
`;