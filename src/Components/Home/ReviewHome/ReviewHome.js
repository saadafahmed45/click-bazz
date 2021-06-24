import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faSignOutAlt, faCalendar, faGripHorizontal, faStar,faUserMd } from '@fortawesome/free-solid-svg-icons';
import "./ReviewHome.css";
const ReviewHome = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://secure-reaches-57604.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <section className="review-section">
        <div className="container-fluid">
          <h1 className="mb-5  bold-six">Testimonials </h1>
          {/* <h5>{reviews.length}</h5> */}
          <div className="row text-center">
            {/* className="brand-color bold-six" */}
            <Carousel>
              {reviews?.map((review) => (
                <div class="carousel-box ml-2">
                  <div class="carousel-header">
                    <img src={review.photo} alt="" />
                    <h5>{review.name}</h5>
                    <h6>{review.companyName}</h6>
                    <div class="carousel-bottom">
                      <p class="card-text">{review.description}</p>

                     <div className="review-icon">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/> 
                    <FontAwesomeIcon icon={faStar}/>

                     </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewHome;
