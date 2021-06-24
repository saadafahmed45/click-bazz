import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/st2.jpg";

import img2 from "../../Images/v.jpg";
import img3 from "../../Images/lpcm.jpg";
import img4 from "../../Images/ed3.jpg";
import img5 from "../../Images/studio.jpg";

import Navbar from "../../Navbar/Navbar";

const SliderSection = () => {
  return (
    <div>
      <Navbar />
      <Carousel
        // width='90%'
        // centerMode='true'
        emulateTouch="true"
        dynamicHeight="true"
        height="200px"
        axis="horizontal"
        //  autoFocus='interval '
        autoPlay="interval "
        interval="3500"
      >
        <div>
          <img src={img1} />
          <h2 className="legend">
            “In photography there is a reality so subtle that it becomes more
            real than reality.”
          </h2>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">
            “We are making photographs to understand what our lives mean to us.”
          </p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">
            “A thing that you see in my pictures is that I was not afraid to
            fall in love with these people.”
          </p>
        </div>
        <div>
          <img src={img4} />
          <p className="legend">
            “A portrait is not made in the camera but on either side of it.”
          </p>
        </div>
        <div>
          <img src={img5} />
          <p className="legend">
            “Taking pictures is like tiptoeing into the kitchen late at night
            and stealing Oreo cookies.”
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderSection;
