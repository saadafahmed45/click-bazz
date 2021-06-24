import React from "react";
import "./OurTeam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import Aos from 'aos';
import "aos/dist/aos.css";
// import Shahriar from '../../Images/182218972_803882723893466_6280038520105647310_n.jpg'
import Samir from "../../Images/samir.jpg";
import Saadaf from "../../Images/saadaf.jpg";
import Saadaf2 from "../../Images/sir.png";

const OurTeam = () => {
  const teamMembers = [
    {
      img: Saadaf,
      name: "Saadaf Ahmed",
      author: "Owner Of Click-Bazz ",
      From: "Dhaka,Jatrabari",
    },
    {
      img: Saadaf2,
      name: "Ashraful Islam",
      author: "Editor & Designer",
      From: "Dhaka,Naraiyenganj",
    },
    {
      img: Samir,
      name: "Ahmed Samir",
      author: "Photographer & Model",
      From: "Dhaka,Jatrabari",
    },
   
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              Our Team <span className="brand-color">Members</span>
            </h1>
          </div>
        </div>

        <div className="row">
          {/* <h2>{teamMembers.length}</h2> */}
          {teamMembers?.map((member) => (
            <div className="col-md-4 ">
              <div className="team-box  justify-content-center"data-aos="zoom-in">
                <div className="team-img">
                  <img className="img-fluid" src={member.img} alt="" />
                </div>
                <div className="team-content">
                  <h4>{member.name}</h4>
                  <h5>{member.author} </h5>
                </div>
                <div className="team-social">
                  <ul className="social-media list-inline">
                    <li className="list-inline-item">
                      <a href="//facebook.com">
                        <FontAwesomeIcon
                          className="icon active-icon"
                          icon={faFacebookF}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="//google.com">
                        <FontAwesomeIcon
                          className="icon"
                          icon={faGooglePlusG}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="//instagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
