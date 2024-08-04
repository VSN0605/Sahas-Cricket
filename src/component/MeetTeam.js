import React from 'react'
import styled from 'styled-components'

import img13 from "./images/CoachesAndMentors/arun.png";
import img14 from "./images/CoachesAndMentors/Talmale_sir.jpg";

const MeetTeam = () => {
    const teamData = [
        {
          imageUrl: img14,
          name: ' Kuldeep talmale',
          role: 'Owner Sahas Cricket Club',
          description: 'Define the product vision and strategy and conduct user research to understand the needs of the target market.',
        },
        // {
        //   imageUrl: img13,
        //   name: 'Arun Mishra',
        //   role: 'Head Coach and Physical Education (PE) Coach',
        //   description: 'Analyze financial statements to assess a company\'s financial performance and develop financial models for future performance.',
        // },
      ];
  return (
    <div style={{backgroundColor:'#f6f4f1'}}>
        <Teams>
        {/* <header class="bg-dark text-center py-5 mb-4">
  <div class="container">
    <h1 class="fw-light text-white">Meet the Team</h1>
  </div>
</header> */}

{/* <!-- Page Content --> */}
<div class="container">
  <div class="row justify-content-center">
    {/* <!-- Team Member 1 --> */}
    {/* {teamData.map((member, index) => (
        <div key={index} className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src={member.imageUrl} className="card-img-top" alt="..." style={{maxHeight:'300px'}}/>
            <div className="card-body text-center">
              <h5 className="card-title mb-0">{member.name}</h5>
              <div className="card-text text-black-50">{member.role}</div>
            </div>
          </div>
        </div>
      ))} */}
    
    <Teams>
    <div class="responsive-container-block outer-container">
  <div class="responsive-container-block inner-container">
    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
      <p class="text-blk heading-text  text-black display-5 text-uppercase mb-0">
        Meet our Owner
      </p>
      <p class="text-blk sub-heading-text">
      We're proud of our dedicated team of players, coaches, and administrators who make <b>Sahas Cricket Club</b> a vibrant and successful cricket community. Get to know our key members:
      </p>
    </div>
    <div class="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
    {teamData.map((member, index) => (
      <div key={index} class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div class="card">
          <img class="card-img" src={member.imageUrl}/>
          <p class="text-blk name">
            {member.name}
          </p>
          <p class="text-blk position">
            {member.role}
          </p>
        </div>
      </div>
      ))}
    </div>
  </div>
</div>
    </Teams>
  </div>
  {/* <!-- /.row --> */}

</div>
        </Teams>
    </div>
  )
}

export default MeetTeam


const Teams = styled.div `
* {
  font-family: Nunito, sans-serif;
}

.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  line-height: 25px;
}

.responsive-cell-block {
  min-height: 75px;
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.outer-container {
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
}

.inner-container {
  max-width: 1320px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-top: 50px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
}

.heading-text {
  font-size: 48px;
  line-height: 50px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.sub-heading-text {
  line-height: 30px;
  color: rgb(122, 122, 122);
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.name {
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  text-align: center;
}

.position {
  line-height: 24px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  text-align: center;
}

.card {
  display: block;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border: 2px solid #f3f3f3;
}

.card-img {
  width: 100%;
  height: 300px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  transition: all .5s ease-in-out;
}


.card:hover .card-img {
  transform: translateY(-30px); /* Move image upward on hover */
}


.card:hover{
    border: 2px solid #bdbdbf;
}

.card-container {
  display: inline-block;
  margin-top: 0px;
  margin-right: 0px;
  /* margin-bottom: 40px; */
  margin-left: 0px;
}

.headings-container {
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team-members-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .name {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 0px;
  }

  .card{
    max-height: 360px;
    /* overflow: hidden; */
  }

  .position {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .card-img {
    width: 100%;
    min-width: 100%;
    height: 320px;
    min-height: 230px;
    max-height: 280px;
  }
}

@media (max-width: 768px) {
  .position {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .name {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .heading-text {
    text-align: center;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .sub-heading-text {
    text-align: center;
    color: rgb(122, 122, 122);
    max-width: 500px;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
  }

  .team-members-container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    gap: 30px;
  }

  .card {
    display: flex;
  }

  .card-img {
    max-width: 300px;
    min-width: 250px;
  }

  .headings-container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .card {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .heading-text {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .inner-container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
}

@media (max-width: 500px) {
  .heading-text {
    text-align: left;
    line-height: 65px;
  }

  .sub-heading-text {
    color: rgb(122, 122, 122);
    text-align: left;
  }

  .name {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 5px;
    padding-left: 0px;
  }

  .position {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  .inner-container {
    margin-top: 80px;
    margin-right: 0px;
    margin-bottom: 50px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .outer-container {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
  }

  .card-img {
    width: 100%;
  }

  .heading-text {
    font-size: 40px;
    line-height: 45px;
  }

  .card-img {
    min-width: auto;
  }
}


@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap');

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.wk-desk-1 {
  width: 8.333333%;
}

.wk-desk-2 {
  width: 16.666667%;
}

.wk-desk-3 {
  width: 25%;
}

.wk-desk-4 {
  width: 33.333333%;
}

.wk-desk-5 {
  width: 41.666667%;
}

.wk-desk-6 {
  width: 50%;
}

.wk-desk-7 {
  width: 58.333333%;
}

.wk-desk-8 {
  width: 66.666667%;
}

.wk-desk-9 {
  width: 75%;
}

.wk-desk-10 {
  width: 83.333333%;
}

.wk-desk-11 {
  width: 91.666667%;
}

.wk-desk-12 {
  width: 100%;
}

@media (max-width: 1024px) {
  .wk-ipadp-1 {
    width: 8.333333%;
  }

  .wk-ipadp-2 {
    width: 16.666667%;
  }

  .wk-ipadp-3 {
    width: 25%;
  }

  .wk-ipadp-4 {
    width: 33.333333%;
  }

  .wk-ipadp-5 {
    width: 41.666667%;
  }

  .wk-ipadp-6 {
    width: 50%;
  }

  .wk-ipadp-7 {
    width: 58.333333%;
  }

  .wk-ipadp-8 {
    width: 66.666667%;
  }

  .wk-ipadp-9 {
    width: 75%;
  }

  .wk-ipadp-10 {
    width: 83.333333%;
  }

  .wk-ipadp-11 {
    width: 91.666667%;
  }

  .wk-ipadp-12 {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .wk-tab-1 {
    width: 8.333333%;
  }

  .wk-tab-2 {
    width: 16.666667%;
  }

  .wk-tab-3 {
    width: 25%;
  }

  .wk-tab-4 {
    width: 33.333333%;
  }

  .wk-tab-5 {
    width: 41.666667%;
  }

  .wk-tab-6 {
    width: 50%;
  }

  .wk-tab-7 {
    width: 58.333333%;
  }

  .wk-tab-8 {
    width: 66.666667%;
  }

  .wk-tab-9 {
    width: 75%;
  }

  .wk-tab-10 {
    width: 83.333333%;
  }

  .wk-tab-11 {
    width: 91.666667%;
  }

  .wk-tab-12 {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .wk-mobile-1 {
    width: 8.333333%;
  }

  .wk-mobile-2 {
    width: 16.666667%;
  }

  .wk-mobile-3 {
    width: 25%;
  }

  .wk-mobile-4 {
    width: 33.333333%;
  }

  .wk-mobile-5 {
    width: 41.666667%;
  }

  .wk-mobile-6 {
    width: 50%;
  }

  .wk-mobile-7 {
    width: 58.333333%;
  }

  .wk-mobile-8 {
    width: 66.666667%;
  }

  .wk-mobile-9 {
    width: 75%;
  }

  .wk-mobile-10 {
    width: 83.333333%;
  }

  .wk-mobile-11 {
    width: 91.666667%;
  }

  .wk-mobile-12 {
    width: 100%;
  }
}
`;

