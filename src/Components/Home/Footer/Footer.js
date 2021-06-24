import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className=" col-sm-6 col-md-3">
            <div className="map mt-2 mr-3">
                <h6>Location:</h6>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7307.652549116656!2d90.4585777!3d23.68216990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1624485763190!5m2!1sen!2sbd" style={{borderRadius:"10px"}}   allowfullscreen="" loading="lazy"></iframe>
</div>
              <div className="adress">
                {/* <FontAwesomeIcon icon={faBookmark} />{" "} */}
                <span>
                  H#403 Road #021 <br />
                  Jatrabari,Dhaka-1362,Bangladesh
                </span>
              </div>
       
              {/* <nav aria-label="breadcrumb">
  <ol class="breadcrumb mt-2">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item"><a href="#">studio</a></li>
  </ol>
</nav> */}



            </div>

            <div className=" col-sm-6 col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="link-sec">
                    <h6>Company</h6>
                    <Link to="/company">
                      <p>Terms of Use</p>
                    </Link>
                    <Link to="/company">
                      <p>About</p>
                    </Link>
                    <Link to="/company">
                      <p>Project</p>
                    </Link>
                    <Link to="/login">
                      <p>Team</p>
                    </Link>
                    <Link to="/company">
                      <p>Submit </p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="link-sec">
                    <h6>Quick Link</h6>
                   
                   <Link to="/company">
                      <p>Review</p>
                    </Link>
                    <Link to="/company">
                      <p>Sales</p>
                    </Link>
                    <Link to="/company">
                      <p>Contact</p>
                    </Link>
                    <Link to="/company">
                      <p>Office</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
<div className="col-md-5">
<div className="social">
    <h5>About Us</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident,</p>
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
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now:</h6>
             
               <a href="tel:+8801870941293" class="btn btn-outline-primary">+8801870941293</a>
              
            </div>
</div>

</div>




          </div>

          
        </div>
        <div className="copyRight text-center">
          <p>Copyright © {new Date().getFullYear()} clickbaaz.com</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
