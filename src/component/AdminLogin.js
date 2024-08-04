import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Register.css';
import { set } from 'react-hook-form';
import Cookies from 'js-cookie';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

<ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>


export default function RegisterCoach({dbpath, setBtnstatus}) {
  const containerStyle = {
    width: '60%',
    marginLeft: '20%',
    backgroundColor: 'white'
  };

  const navigate = useNavigate();

  function handleClick() {
    
    Cookies.set('userLoggedIn', 'true');
    navigate('/dashboard');
    
    
  }

  function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  function sendOtpEmail(toEmail) {
    const OTP_CODE = generateOtp();
  
    // Store this OTP_CODE somewhere, maybe in component state, to verify against later
    // For a more secure system, you'd probably want to store this server-side
  
    setOTP(OTP_CODE);

    const templateParams = {
      to_email: toEmail,
      otp_code: OTP_CODE
    };
  
    emailjs.send('service_atj4g64', 'template_yykbyn7', templateParams, 'rLQ6VV65yrNVNmqbG')
      .then((response) => {
         console.log('Email successfully sent!', response);
      })
      .catch((error) => {
         console.error('Email sending error:', error);
      });
  
    return OTP_CODE;
  } 
  
  const [otp, setOTP] = useState('');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [userOtp, setUserOtp] = useState('');
  const [realOtp, setRealOtp] = useState(null);

  const handleSendOtp = () => {
    var email = document.getElementById('InputUsername').value;
    if(email === 'prajyoturkude@gmail.com'|| email === 'vainano123@gmail.com' || email === 'kmt161272@gmail.com'|| email === 'tinkukohad05@gmail.com' || email === "royalswebtech.director@gmail.com")
    {
      setEmail(email);
      const generatedOtp = sendOtpEmail(email);
      setRealOtp(generatedOtp);
      setOtpSent(true);
      alert("OTP Send Successfully")
    }
    else{
      alert('Invalid Mail ID');
    }
  };

  const handleVerifyOtp = () => {
    if (userOtp === realOtp) {
      alert("OTP Verified!");
      handleClick();
    } else {
      alert('Invalid OTP!');
      
    }
  };
  
/* 
var btnsubmit =() => {
    var password = document.getElementById('InputPassword1').value;
    if( password === ) {
        // Redirection to dashboard page
        handleClick();
        setBtnstatus('Dashboard');
    } else {
        alert('Invalid otp');
    } 
};
 */
  
  return (
    <>
    <div className='main_div' style={{backgroundColor:'#222429'}}>
      <br />
      <br />
      <br />
      <br />
      <div className="container shadow-lg p-5 mb-5 bg-body-tertiary rounded" style={containerStyle}>
        <center>
          <h3 className="sp1">Admin Login</h3>
        </center>
        <br />
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <div style={{display:'flex', gap:'20px'}}>
            <input type="email" class="form-control" id="InputUsername"  aria-describedby="emailHelp"/>
            <button type="button" style={{width:'100px'}} onClick={handleSendOtp} id="submitbtn" class="btn btn-primary">Send OTP</button>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">OTP</label>
            <input type="password" class="form-control"  id="InputPassword1" onChange={(e) => setUserOtp(e.target.value)}/>
          </div>
          <center><button type="button" onClick={handleVerifyOtp} id="submitbtn" class="btn btn-primary">Submit</button></center>
        </form>
      </div>
      <br></br>
      <br></br>
      </div>
    </>
  );
}
