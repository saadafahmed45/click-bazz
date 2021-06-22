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
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="services-section p-5">
      <div className="container">
        <div className=" row">
          <div className="col-md-12">
            <h1>
              Our Awesome <span className="brand-color">Services</span>
            </h1>
          </div>
        </div>
        <div className=" row">
          {services.map((service) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3 "data-aos="zoom-in-up">
              <Link to={`/checkOut/${service._id}`}>
                <div className="card card-hover py-3">
                  <img
                    src={service.imageURL}
                    className="card-img-top img-fluid"
                    alt="Card img"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{service.name}</h4>
                    <h5 className="brand-color">${service.price}</h5>

                    <div className="d-flex align-items-center justify-content-between">
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

     

        <div className="services-btn pt-5">
          <button className="btn btn-danger brand-bg ">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
