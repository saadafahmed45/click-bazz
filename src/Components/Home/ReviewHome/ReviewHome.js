import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./ReviewHome.css";
const ReviewHome = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <section className="review-section">
        <div className="">
          <h1 className="mb-5  bold-six">Testimonials </h1>
          {/* <h5>{reviews.length}</h5> */}
          <div className="row text-center">
            {/* className="brand-color bold-six" */}
            <Carousel>
              {reviews?.map((review) => (
                <div class="carousel-box">
                  <div class="carousel-header">
                    <img src={review.photo} alt="" />
                    <h5>{review.name}</h5>
                    <h6>{review.companyName}</h6>
                    <div class="carousel-bottom">
                      <p class="card-text">{review.description}</p>

                      {/* <FontAwesomeIcon icon={faCamera} /> */}
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
