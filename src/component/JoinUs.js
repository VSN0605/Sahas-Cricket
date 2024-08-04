import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ShowFooter_Context from './ShowFooter_Context';
import styled from 'styled-components';
import 'aos/dist/aos.css'
import AOS from 'aos'
import { AdminContext } from '../Context/AdminContext';

const JoinUs = () => {
  AOS.init({
    duration: 650,
    once: true
  });
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setmobile] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [submitDisable, setSubmitDissable] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const handlepopup = () => {
      setPopUp(!popUp);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        setSubmitDissable(true);
        const response = await axios.post('http://localhost/test/joinus.php', {
            name: name,
          email: email,
          mobile: mobile,
          age: age,
          gender: gender,
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
  
        console.log('Server Response:', response.data);
        

  
        if (response.data.includes('Thank You')) {
          // Reset form fields after successful submission
        setSubmitDissable(false);
          handlepopup();

          setName('');
          setEmail('');
          setmobile('');
          setAge('');
          setGender('');
        } else {
        // setSubmitDissable(false);
          alert('Failed to submit . Please try again.');
        }
      } catch (error) {
        setSubmitDissable(false);
        console.error('Failed to submit . Please try again.');
      }
    
    };
    const{setShowFooter} = useContext(ShowFooter_Context);
    // console.log(showFooter);
  
    useEffect(() => {
      setShowFooter(false);
      // Return a cleanup function to reset showFooter when leaving the component
      return () => {
        setShowFooter(true);
      };
    }, [setShowFooter]); // Make sure to include setShowFooter in the dependencies array
  
  
    const{setIsAdmin} = useContext(AdminContext);
    useEffect(()=>{
      setIsAdmin(false)
    },[])

  return (
    <div className="container" style={{marginTop:'20px', marginBottom: '20px'}}>
    <div className="row justify-content-center">

      <div className="col-md-6">
      <div className="container" data-aos="fade-right">
      <h1 className="text-center mt-5 mb-4">Why to Join Sahas Cricket Club ?</h1>
      <br /><br />
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Premier Training Facilities</h2>
          <p>Our state-of-the-art facilities, including cutting-edge equipment and expert coaching staff, provide the ideal environment for honing your skills and maximizing your potential.</p>
        </div>
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Experienced Coaches</h2>
          <p>Benefit from the guidance of experienced coaches who are dedicated to helping you develop both as a cricketer and as an individual. Our coaches tailor training programs to suit your goals and aspirations, ensuring personalized attention and support.</p>
        </div>
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Supportive Community</h2>
          <p>Join a community of passionate cricket lovers who share your enthusiasm for the game. Forge lifelong friendships, celebrate victories together, and support each other through the challenges, creating memories that will last a lifetime.</p>
        </div>
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Opportunities for Growth</h2>
          <p>Whether you aspire to play competitively, pursue a career in cricket, or simply want to improve your skills for recreational play, Sahas Cricket Club provides the resources and opportunities you need to achieve your goals.</p>
        </div>
      </div>
    </div>
      </div>
      <div className="col-md-6" data-aos="fade-left">
        <form onSubmit={handleSubmit} className="p-5 border rounded shadow-lg bg-light" style={{marginTop:'30px'}} >
          <h2 className="mb-4 text-center">Join Us</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
  <label htmlFor="mobile" className="form-label">Phone Number:</label>
  <input
    type="text"
    id="mobile"
    className="form-control"
    value={mobile}
    onChange={(e) => setmobile(e.target.value)}
    pattern="[0-9]*"  // Only allows numeric input
    inputMode="numeric"  // Provides a numeric keyboard on mobile devices
    required
  />
</div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <input
              type="number"
              id="age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              id="gender"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="d-grid">
                  <button type="submit" className="btn btn-primary" disabled={submitDisable} onClick={handleSubmit}
                    style={submitDisable ?{opacity:"0.7"}:{opacity:'1'}}
                    >{!submitDisable ? 'Submit' : 'Submitting...'}</button>
          </div>
        </form>
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
export default JoinUs;

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