import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Card from "../../Images/pexels-gabriel-peter-707018.jpg"
import Aos from 'aos';
import "aos/dist/aos.css";


const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    Aos.init({duration:1500})
  },[])
  
  useEffect(() => {
    fetch("https://click-buzz-11.web.app/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="services-section">
      <div className="container">

          <div className="col">
            <h1>
              Our Awesome <span className="brand-color bold-six">Services</span>
            </h1>
          </div>
      
        <div className=" row">
          {services.map((service) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3  d-flex justify-content-center "data-aos="zoom-in-up">
              <Link to={`/checkOut/${service._id}`}>
               <div className="main-card">
               <div className="card card-hover py-3">
                  <img
                    src={service.imageURL}
                    className="card-img-top img-fluid"
                    alt="Card img"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{service.name}</h4>
                    <h5 className="brand-color">${service.price}</h5>

                    <div className="">
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
               </div>
              </Link>
            </div>
          ))}
        </div>

     

        <div className="services-btn pt-5">
          <button className="btn login-btn ">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
