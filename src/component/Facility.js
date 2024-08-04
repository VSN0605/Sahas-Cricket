import React from 'react'
import styled from 'styled-components'

import ico1 from './images/throw.png'
import ico2 from './images/cricket.png'
import ico3 from './images/ground.png'

const Facility = () => {
  return (
    <div>
    <FacilitySec className='container'>
      <section>
      <div class="row">
        <h1>The Facilities We Provides</h1>
      </div>
      <div class="row">
        {/* <!-- Column One --> */}
        <div class="column">
          <div class="card">
          <div class="">
              {/* <i class="fa-solid fa-shield-halved"></i> */}
              <img className='icon' src={ico1} alt="" />
            </div>
            <h3>Bowling machines</h3>
            <p>
              Bowling machines redefine cricket training with precise simulations, replicating top bowlers' deliveries. They offer controlled   practice environments, improving batting skills and confidence against various bowling styles.
            </p>
          </div>
        </div>
        {/* <!-- Column Two --> */}
        <div class="column">
          <div class="card">
            <div class="">
              {/* <i class="fa-solid fa-shield-halved"></i> */}
              <img className='icon' src={ico2} alt="" />
            </div>
            <h3> Indoor Facility</h3>
            <p>
            Indoor training facilities revolutionize sports practice, providing controlled environments for athletes to refine skills regardless of weather. These facilities offer year-round training opportunities with optimal conditions for performance improvement.
            </p>
          </div>
        </div>
        {/* <!-- Column Three --> */}
        <div class="column">
          <div class="card">
          <div class="">
              {/* <i class="fa-solid fa-shield-halved"></i> */}
              <img className='icon' src={ico3} alt="" />
            </div>
            <h3>Premium Turfs</h3>
            <p>
            Premium turfs redefine playing surfaces with cutting-edge technology, offering ideal conditions for sports enthusiasts. These turfs enhance performance and enjoyment, providing year-round playing opportunities regardless of weather conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
    </FacilitySec>
    </div>
  )
}

export default Facility


const FacilitySec = styled.div `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.row h1 {
  width: 100%;
  text-align: center;
  font-size: 3em;
  margin: 0.6em 0;
  font-weight: 600;
  color: #070024;
  text-transform: uppercase;
}
.column {
  padding: 1em;
}
.card {
  padding: 3.1em 1.25em;
  height: 100%;
  text-align: center;
  background: linear-gradient(0deg, #397ef6 10px, transparent 10px);
  background-repeat: no-repeat;
  background-position: 0 0.62em;
  box-shadow: 0 0 2.5em rgba(0, 0, 0, 0.15);
  border-radius: 0.5em;
  transition: 0.5s;
  cursor: pointer;
}
.card .icon {
  font-size: 2.5em;
  height: 2em;
  width: 2em;
  margin: auto;
  display: grid;
  place-items: center;
  color: #ffffff;
  transition: transform 0.5s ease-in-out; /* Transition on transform property */
}
/* .icon:before {
  position: absolute;
  content: "";
  height: 1.5em;
  width: 1.5em;
  border: 0.12em solid #fb5b21;
  border-radius: 50%;
  transition: 0.5s;
} */
.card h3 {
  font-size: 1.3em;
  margin: 1em 0 1.4em 0;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #070024;
}
.card p {
  line-height: 2em;
  color: #625a71;
}
.card:hover {
  background-position: 0;
}

.card:hover .icon {
  transform: scale(1.3); 
}
@media screen and (min-width: 768px) {
  section {
    padding: 1em 7em;
  }
}
@media screen and (min-width: 992px) {
  section {
    padding: 1em;
  }
  .card {
    padding: 5em 2em;
  }
  .column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
    padding: 0 1em;
  }
}
`;