import React, {useState} from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import axios from 'axios'; // Import axios for making HTTP requests
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SlLocationPin } from "react-icons/sl";

const Event_card = ({product}) => {
    AOS.init({
        duration: 650,
        once: false,
      });
	  console.log(product);
	  
	  const[modalShow, setModalShow] = useState(false);

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
			<h2>{product.name}</h2>
		  <div style={{display:'flex',justifyContent:'start', alignItems:'center', fontSize:'14px', color:'#323130', backgroundColor:'rgba(25, 57, 138, .1)', borderRadius:'4px', padding:'8px', fontWeight:'450',}}>
			<p style={{marginBottom:'0px', display:'flex', justifyContent:'start', alignItems:'center', gap:'2px',}}>
				<SlLocationPin
					style={{
					color: 'black',
					}}
				/>
			{product.location}</p>
		  </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
	  	<img src={`http://localhost/test/event/${product.Image}`} alt={product.title} style={{ width: '100%', maxHeight:'300px', borderRadius:'5px', objectFit:'cover' }} />
        <h4 style={{marginTop:'20px'}}>Description:</h4>
        <p>{product.Description}</p>
        <h4>Date:</h4>
        <p>{product.date}</p>
        {product.address && (
          <>
            <h4>Address:</h4>
            <p>{product.address}</p>
          </>
        )}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}


  return (
	<>
    <EventCard>
    				<Card>
                      <div class="card" 
                        
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" style={{
                        backgroundImage: `url(http://localhost/test/event/${product.Image})`

                        }}
                        >
                        <div class="background-div">
                        </div>
                        <p class="heading">{product.name}</p>
                        <p class="para">{product.Description}</p>
						<span className='add'>{product.address}</span>
						<div class="overlay"></div>
                        <button class="card-btn" onClick={() => setModalShow(true)}>Click</button>
                      </div>
                    </Card>
      </EventCard>

	  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
		product={product}
      />
	</>
  )
}

export default Event_card



const EventCard = styled.div `
 .event-card-list {
	margin-top: 4em;
    padding-left: 0;
}

.event-card-list li {
	list-style: none;
	margin: 2em 0;
}

.event-card {
	overflow: hidden;
	width: 600px;
	border-radius: 0.3em;
    box-shadow: 2px 7px 10px -5px rgba(0,0,0,0.41);
    padding-bottom: 5px;
    border: 1px solid gray;
}

.event-card img {
	width: 240px;
	height: auto;
	object-fit: cover;
}

.event-card .name {
    font-family: "Poppins", sans-serif;
	font-size: 2.5rem;
	/* font-weight: 400; */
}

.event-card .name a {
	text-decoration: none;
	/*color: #212121;*/
}

.event-card .date {
	font-size: 1.4em;
	font-weight: 400;
	color: #6D6D6D;
}

.event-card .location {
	font-size: 0.9em;
	color: #757575;
}

.event-card .location i {
	font-size: 1.1em;
	padding-right: 0.3em;
	margin-bottom: 0.085em;
}

.event-card .desc {
	margin-bottom: 0.2em;
	font-size: 1em;
	padding-left: 0.1em;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
}

.event-card .date-ribbon {
	position: absolute;
	top: 0;
	left: 1em;
	background: #FE453E;
	color: #fff;
	padding: 0.2em 1em;
	padding-bottom: 0;
	border-radius: 0;
}

.event-card .date-ribbon::before, .event-card .date-ribbon::after {
	content: '';
	position: absolute;
	top: 100%;
	
	width: 50%;
	height: 30px;
}

.event-card .date-ribbon::before {
	left: 0;
	border-left:solid 2em #FE453E;
	border-top: solid 15px #FE453E;
	border-bottom: solid 15px transparent;
	border-right: solid 2em transparent;
	}

.event-card .date-ribbon::after {
	right: 0;
	border-right:solid 2em #FE453E;
	border-top: solid 15px #FE453E;
	border-bottom: solid 15px transparent;
	border-left: solid 2em transparent;
}

.event-card .date-ribbon h2 {
	font-weight: 500;
	font-size: 1.15em;
	letter-spacing: 0.07em;
	text-align: center;
}

.event-card .date-ribbon h1 {
	text-align: center;
	font-weight: 400;
	font-size: 2.45em;
	margin-top: -0.09em;
	line-height: 1em;
}

.event-card-content{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
	/* padding-bottom: 10px; */
}

.event-details{
	padding-bottom: 10px;
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
.add {
  text-align: center;
  color: #ffffff;
  line-height: 1.2;
  opacity: 0.5;
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