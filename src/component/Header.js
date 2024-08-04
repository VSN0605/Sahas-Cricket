import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

import logo from "./images/Sahas_logo-removebg-preview.png"
import Navigate_Context from '../Context/Navigate_Context';
import { AdminContext } from '../Context/AdminContext';



export default function Header({dbpath, btnStatus}) {    
  const navigate = useNavigate()
    const{handalaboutclick, setAbout, about,navi, navabout,ids, setIds} = useContext(Navigate_Context);
    const{isAdmin} = useContext(AdminContext);

    const doabout = () => {
        handalaboutclick();
        setIds("aboutid");
    }
    const doTrainers = () => {
        handalaboutclick();
        setIds("coaches");
    }
    const doGallery = () => {
        handalaboutclick();
        setIds("gallery");
    }


    const [checked, setIsChecked] = useState(false);




useEffect(()=> {
   
    if(navi){
        navigate("/")
        setAbout(true);
    }
},[navi])


    const [active, setActive] = useState(false);

    const handleActive = (isActive) => {
        setActive(isActive);
      };


  return (
    <>
    
        <div class="container-fluid bg-dark px-0">
        <div class="row gx-0">
            <div class="col-lg-2 bg-dark d-none d-lg-block">
            <Link  to="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <Link to="/" class="m-0 display-7 text-primary text-uppercase"><img src={logo} width='150px' style={{marginTop:'-10px', marginLeft:'-10px'}}></img></Link>
                </Link>
            </div>
            <div class="col-lg-10">
                <div class="row gx-0 bg-secondary d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                            <i class="fa fa-envelope text-primary me-2"></i>
                            <h6 class="mb-0">kmt161272@gmail.com</h6>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-2">
                            <div className='row justify-content-center '>
                            <a href="tel:8451968111" target='_blank' style={{display:'flex', alignItems:'center'}}>
                            <i class="fa fa-phone-alt text-primary me-2"></i>
                            <h6 class="mb-0"> +91 9689693693</h6>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="d-inline-flex align-items-center py-2">
                            <a class="btn btn-light btn-square rounded-circle me-2" href="https://facebook.com" target='_blank'>
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle me-2" href="https://twitter.com/i/flow/login?redirect_after_login=%2FSahasCricket" target='_blank'>
                                <i class="fab fa-twitter"></i>
                            </a>
                            {/* <a class="btn btn-light btn-square rounded-circle me-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a> */}
                            <a class="btn btn-light btn-square rounded-circle me-2" href="https://www.instagram.com/sahas_cricket_club/?hl=en" target='_blank'>
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle" href="https://www.youtube.com/@sahascricketclub" target='_blank'>
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                        <Link to="/" class="m-0 display-4 text-primary text-uppercase"><img src={logo} width='80px' style={{marginTop:'-10px', marginLeft:'10px', margin:'1px 0'}}></img></Link>
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        {!isAdmin ? <div class="navbar-nav mr-auto py-0">
                            <NavLink to={'/'} className={`nav-item nav-link `} activeClassName="active" >Home</NavLink>
                            <NavLink to={'/AboutUs'} className={`nav-item nav-link `} activeClassName="active" >About</NavLink>
                            <NavLink to={'/Coaches'} className="nav-item nav-link" activeClassName="active">Coaches</NavLink>
                            <NavLink to={'/Gallery'} className={`nav-item nav-link `} activeClassName="active" >Gallery</NavLink>
                            <NavLink to={'/ContactUs'} className="nav-item nav-link" activeClassName="active" >Contact</NavLink>
                            <NavLink to={'/Products'} className="nav-item nav-link" activeClassName="active" >Products</NavLink>
                        </div> : <div className='navbar-nav mr-auto py-0 px-0' style={{display:'flex', width:'100%', justifyContent: 'start', alignItems:'center',}}><NavLink className='nav-item nav-link' style={{color:'white', fontSize: '25px', letterSpacing: '1px', padding:'30px 0'}}>Welcome to Admin Panel</NavLink></div>}

                        <div style={{display:'flex', gap:'10px', }}>
                            
                        
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}
