import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="row">
        <div className="col-12">
          <div className="contact-header mt-5 ">
            <h1 style={{ color: " #fff", fontWeight: " 600" }}>
              Always contact With us
            </h1>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email*"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Subject* "
            />
          </div>
          <textarea
            class="form-control"
            placeholder="Your Massege*"
            rows="8"
            cols="50"
          ></textarea>
 {/* <button type="button" class="btn  brand-bg btn-danger">
        Get Appointment
         </button> */}
          <input
            class="btn  brand-bg btn-danger mt-4"
            type="submit"
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
