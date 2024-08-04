import React, { useContext, useEffect, useState } from "react";
import Coach1 from "./images/CoachesAndMentors/DBarde.jpg";
import Coach2 from "./images/CoachesAndMentors/KSalve.jpg";
import Coach3 from "./images/CoachesAndMentors/PYadav.jpg";
import Coach4 from "./images/CoachesAndMentors/parik.png";
import Coach5 from "./images/CoachesAndMentors/arun.png";
import { Button, Modal, Table } from "react-bootstrap";

import backgroundImage from "./images/ProductSec.jpg";

import bg from "./Gallery Images/gallery_grp.png";
import bg1 from "./Gallery Images/team.jpeg";

import "aos/dist/aos.css";
import AOS from "aos";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { AdminContext } from "../Context/AdminContext";

const Coaches1 = () => {
  AOS.init({
    duration: 650,
    once: false,
  });
  const teamMembers = [
    {
      name: "Arun Suresh Mishra",
      imageSrc: Coach5,
      role: "Head Coach and Physical Education (PE) Coach",
      experience:
        "Arun is a professional cricket coach with 11 years of intensive coaching experience and 2 years of PE teaching experience. He has coached over 800 pre-primary, primary, and secondary school kids in reputed schools like D.Y. Patil Shantiniketan, Kolhapur, and SVKM School, Dhule. Arun currently owns and runs Junior’s Cricket Academy in Amravati. Under his guidance, several academy players have excelled, with notable achievements such as participation in VCA women's camp and selection in U14/U16 trials.",
      bio: "Arun sir is known for his expertise in handling young players using 'fun and learn' methods, making sports attractive to kids. He specializes in technical workouts and team building, having led teams to district championships and university cricket competition semifinals.",
      currentDesignation:
        "Owner & Head Coach, Junior’s Cricket Academy, Amravati",
      workingExperience: [
        {
          position: "Head Coach",
          organization: "Sant Gajanan Cricket Academy, Amravati",
          jobProfile: [
            "On-ground cricket coaching for up to 100 students (boys up to U16 and all age group girls)",
            "Guidance on fitness, net practice, fielding, batting, and bowling drills",
            "Individual counseling to boost player confidence",
          ],
          period: "April 2019 to January 2022",
        },
        {
          position: "PE Teacher",
          organization: "Marcos Quay Sporting Excellence (SVKM School, Dhule)",
          jobProfile: [
            "PE and sports teaching for over 450 students",
            "Curriculum activities for pre-primary, primary, and secondary students",
          ],
          period: "April 2018 to February 2019",
        },
        {
          position: "PE Teacher",
          organization: "Edusports (D.Y. Patil Shantiniketan School, Kolhapur)",
          jobProfile: [
            "PE and sports teaching for over 400 students",
            "Curriculum activities for pre-primary and primary students",
          ],
          period: "December 2016 to April 2018",
        },
        {
          position: "Assistant Coach",
          organization: "Sant Gajanan Cricket Academy, Amravati",
          jobProfile: [
            "On-ground cricket coaching for up to 60 students (up to U16 groups)",
            "Guidance on fitness, net practice, fielding, batting, and bowling drills",
            "Individual counseling to boost player confidence",
          ],
          period: "April 2012 to June 2016",
        },
        {
          position: "Cricket Coach",
          organization: "School of Scholars, Amravati",
          jobProfile: ["Cricket coaching for 5th to 10th standard students"],
          period: "6 months (3 months sessions in 2014 & 2015)",
        },
        {
          position: "Cricket Coach",
          organization: "Jawahar Navoday Vidyalaya, Amravati",
          jobProfile: [
            "Cricket coaching for under-15 western zone Jawahar Navoday Vidyalaya team",
          ],
          period: "One-month tournament (August 2013)",
        },
        {
          position: "Cricket Coach",
          organization: "Kesarbai Lahoti College, Amravati",
          jobProfile: ["Coaching college girls team"],
          period: "2013, 2014 & 2015 seasons",
        },
      ],
    },
    {
      name: "DHANANJAY BARDE",
      imageSrc: Coach1,
      role: "Batting Coach and Fielding Coach",
      experience: "EX- VCA PLAYER (VCA ACADEMY)",
      bio: "Passionate about coaching young talents, expert in developing batting techniques, and known for improving fielding skills with a wealth of experience from VCA Academy.",
    },
    {
      name: "Kuldeep Salve",
      imageSrc: Coach2,
      role: "Batting, Pace Bowling and High Intensity Fielding Coach from 2020 (For all Age Group Batches).",
      internationalExperience: [
        {
          team: "Oman 'A' National Team",
          year: 2020,
          format: "One Day",
          against: "Jersey",
          role: "Batsman All Rounder",
        },
        {
          team: "Al-Turki NMC (Oman First Class Premier League)",
          year: "12th Dec 2018 to 26th Nov 2020",
          role: "Top-order and Middle-order Batsman, Right Arm Medium Pacer",
        },
      ],
      experience: [
        "Represented Vidarbha Ranji Trophy Camp Probables in 2013-14. ",
        "Represented Vidarbha C.K Nayadu Probables in 2014-15 & 2015-16. ",
        "Represented Vidarbha Inter University Nationals in 2013-14. ",
        "Represented Vidarbha Under-19 Cooch Behar Trophy in 2012-13. ",
        "Represented Vidarbha Under-19 56th National Games DSO in 2011-12. ",
        "Represented Vidarbha Under-16 Vijay Merchant Trophy BCCI in 2008-09 and 2009-10. ",
        "Represented Vidarbha Under-15 Polly Umrigar Trophy BCCI in 2007-08.",
      ],
      bio: "Kuldeep Salve is a talented cricketer known for his skills as a top-order batsman and right-arm medium pacer. He has represented Oman 'A' National Team in international cricket and played in the Oman First Class Premier League. Kuldeep has also showcased his abilities in various age group competitions representing Vidarbha State in India.",
      players: [
        {
          name: "Aryan Laswante",
          represent: "Inter University (Rtmnu)",
        },
        {
          name: "Naman Vaidya",
          represent: "U-14 VCA Camp and Probables",
        },
        {
          name: "Tanish Fekrikar",
          represent: "U-14 VCA Camp and Probables",
        },
        {
          name: "Payal Bais",
          represent: " Inter University",
        },
        {
          name: "Apurva Lakade",
          represent: " Inter University",
        },
      ],
    },
    {
      name: "PRADEEPKUMAR YADAV",
      imageSrc: Coach3,
      role: "Cricket Coach and Sports Fitness Instructor",
      experience: "14 years in coaching, ICCA certified coach, former player",
      bio: "Pradeep Kumar Yadav is an experienced cricket coach and sports fitness instructor based in Nagpur. With 14 years of coaching experience and ICCA certification, he has a strong background in player development.",
      players: [
        {
          name: "Samarth Nathani",
          represent: "VCA U-14",
          position: "Batsman",
        },
        {
          name: "Sharddha Nabira",
          represent: "VCA U-15, U-19",
          position: "All-rounder",
        },
        {
          name: "Aarohi Bambode",
          represent: "VCA U-19, U-23, Seniors",
          position: "All-rounder",
        },
        {
          name: "Shan Parihar",
          represent: "State Level",
          position: "Bowler",
        },
        {
          name: "Sanskruti Gullane",
          represent: "Arunachal Pradesh (BCCI U-19)",
          position: "Batsman",
        },
        {
          name: "Akshay Puri",
          represent: "Singapore (T20 International)",
          position: "Bowler",
        },
      ],
    },
    {
      name: "Parikshit Upadhyay",
      imageSrc: Coach4,
      role: "Batting Coach and Fielding Coach",
      experience:
        "BCCI Level A qualified, Vca Affiliated coach (Level O qualified), Got certification in Biomechanics (Exercise science) and More than 5 years of coaching experience",
      bio: "Parikshit Upadhyay is a highly qualified cricket coach with certifications from BCCI (Level A) and VCA (Level O) affiliations. He holds specialized training in Biomechanics (Exercise Science) and brings over 5 years of extensive coaching experience. Parikshit is dedicated to nurturing young talent and helping players develop advanced skills both on and off the field.",
    },
  ];

  // console.log(teamMembers);

  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShowProfile = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  
  const{setIsAdmin} = useContext(AdminContext);
  useEffect(()=>{
    setIsAdmin(false)
  },[])


  return (
    <div>
      {/* <Abc>
        <div id="aboutid">
          <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: `url(${bg})`, filter: 'brightness(80%)', objectFit:'cover'}}
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
                      Coaches <i className="fa fa-chevron-right"></i>
                    </span>
                  </p>
                  <h1 className="mb-0 bread">Coaches</h1>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
        </div>
      </Abc> */}
      {/* <!-- Team 1 - Bootstrap Brain Component --> */}
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Our Team</h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                We are a group of innovative, experienced, and proficient teams.
                You will love to collaborate with us.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div
            className="row gy-4 gy-lg-0 gx-xxl-5"
            style={{ justifyContent: "center" }}
          >
            {/* Individual team member cards */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-3"
                style={{ marginBottom: "20px", maxWidth: "70%" }}
                onClick={() => handleShowProfile(member)}
              >
                <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                  <div className="card-body p-0 shadow-sm position-relative">
                    <figure className="m-0 p-0">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src={member.imageSrc}
                        alt={member.name}
                        style={{
                          maxHeight: "300px",
                          minHeight: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <figcaption className="m-0 p-4">
                        <h4 className="mb-1">{member.name}</h4>
                        <Text className="text-secondary mb-0 card-text">{member.role}</Text>
                        {/* <div className="card-footer bg-transparent text-center">
                  <button className="btn btn-primary" onClick={() => handleShowProfile(member)}>View Profile</button>
                </div> */}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
            {/* <Modal.Header closeButton>
            <Modal.Title>{selectedMember && selectedMember.name}</Modal.Title>
          </Modal.Header> */}
            <Modal.Body style={{ position: "relative" }}>
              <span
                className="close"
                onClick={handleCloseModal}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "7px",
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "rgb(180 73 73)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30px",
                  alignSelf: "center",
                  borderRadius: "10px",
                  padding: "0 3px 5px 3px",
                }}
              >
                &times;
              </span>
              <div className="row">
                <div className="col-md-4 text-center mb-3 mb-md-0">
                  {" "}
                  {/* Image column */}
                  <img
                    src={selectedMember?.imageSrc}
                    alt={selectedMember?.name}
                    className="img-fluid "
                    style={{
                      maxHeight: "250px",
                      minHeight: "250px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="col-md-8"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  {/* Table column */}
                  <Div>
                    <Table
                      striped
                      bordered
                      hover
                      responsive
                      size="lg"
                      style={{ width: "100%" }}
                    >
                      <tbody style={{ width: "100%" }}>
                        <tr>
                          <td>
                            <strong>Name:</strong>
                          </td>
                          <td style={{fontSize:'15px', fontWeight:'bold', textTransform:'uppercase'}}>{selectedMember?.name}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Experience:</strong>
                          </td>
                          <td>
                            {selectedMember?.experience}
                            <br />
                            <br />
                            {selectedMember?.workingExperience ? (
                              <ul>
                                {selectedMember.workingExperience.map(
                                  (exp, index) => (
                                    <li key={index}>
                                      <strong>{exp.position}</strong> <br />{" "}
                                      {exp.organization} ({exp.period})
                                      <ul>
                                        {exp.jobProfile.map((profile, idx) => (
                                          <li key={idx}>{profile}</li>
                                        ))}
                                      </ul>
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <span></span>
                            )}
                            {selectedMember?.internationalExperience ? (
                              <div>
                                <b>International Experience:</b>
                                <br />
                                <ul>
                                  {selectedMember.internationalExperience.map(
                                    (exp, index) => (
                                      <li key={index}>
                                        <strong>{exp.role}</strong> <br />{" "}
                                        {exp.team} ({exp.year})
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            ) : (
                              <span></span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Role:</strong>
                          </td>
                          <td>{selectedMember?.role}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Bio:</strong>
                          </td>
                          <td>{selectedMember?.bio}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Player Made under his Guidance:</strong>
                          </td>
                          <td>
                            {selectedMember?.players ? (
                              <ul>
                                {selectedMember.players.map((player, index) => (
                                  <li key={index}>
                                    {player.name} ({player.represent}) -{" "}
                                    {player.position}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <span>No players listed under this coach.</span>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Div>
                </div>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer> */}
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default Coaches1;

const Div = styled.div`
  width: 100%;
  .table-responsive {
    width: 100%;
  }
`;
const Text = styled.p`
  max-height: 100px; /* Fallback max height */
  min-height: 40px; /* Fallback max height */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* Number of lines to show */
  -webkit-line-clamp: 2; /* This will be used by WebKit browsers */
  /* Fallback for browsers that don't support -webkit-line-clamp */
  line-height: 22px; /* Adjust this based on your font-size */
`;