import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import HeaderPicture from '../../Images/header.jpg'
import './HeaderMain.css';

const HeaderMain = () => {

useEffect(() => {
  Aos.init({duration:1500})
},[])


    return (
        <div className="header-main">

      <section className=" container">
        <div className="row">
        <div className=" col-12 col-md-6">
            <div className="header-section">
            <h1>To Make Your <br/>Creative <span className="brand-color">Photography</span></h1>
                <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.What I like about photographs is that they capture a moment that’s gone forever”</p>
         <button type="button" class="btn  login-btn">
        Get Appointment
         </button>
         
            </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="header-image " data-aos="fade-left">
                <img className="img-fluid" src={HeaderPicture} alt="" />
                </div>
            </div>
        </div>
      </section>
      </div>

    );
};

export default HeaderMain;