import React from "react";
import StudioPic from "../../Images/studio.jpg";
import "./Professionaly.css";
const Professionaly = () => {
  return (
    <div className="Professionaly-section">
      <div className="container">
        <div className=" row">
          <div className=" col-md-6 studio-pic">
            <img className="img-fluid" src={StudioPic} alt="" />
          </div>

          <div className=" col-md-6">
            <div className="professionaly-contact">
              <h1>“Today everything exists to end in a <span className="brand-color"><b>photograph.</b></span>”</h1>
          <p>The camera is an excuse to be someplace you otherwise don’t belong. It gives me both a point of connection and a point of separation.It’s weird that photographers spend years or even a whole lifetime, trying to capture moments that added together, don’t even amount to a couple of hours</p>
        <div className="row">
        <div className="col-md-4">
               <h1 className="brand-color bold-six">200+ </h1>
               <h3>Studio</h3>
            </div>
            <div className="col-md-4">
               <h1 className="brand-color bold-six">3,000+ </h1>
               <h3>Members</h3>
            </div>
            <div className="col-md-4">
               <h1 className="brand-color bold-six">100+</h1>
               <h3>Photographer</h3>
            </div>
            
        </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionaly;
