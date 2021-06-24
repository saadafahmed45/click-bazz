import React, { useContext, useState } from "react";
import ChackSidebar from "../../User/ChackSidebar/ChackSidebar";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      ...loggedInUser,
      name: data.name,
      companyName: data.company,
      description: data.description,
    };
    console.log(eventData);

    const url = `http://localhost:7000/addReview`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        alert("Thank You for Reviewed");
      }
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <ChackSidebar></ChackSidebar>
        </div>

        <div className="col-md-8">
          {/* <h1>this is Dashboard</h1> */}

          <div className="container" style={{ padding: "30px" }}>
            <div className="input-box">
              <h3>Review</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />

                <input
                  className="form-control"
                  name="name"
                  defaultValue={loggedInUser.name}
                  placeholder="Your Name"
                  // defaultValue=" add New Items"
                  {...register("name")}
                />

                <br />

                <input
                  className="form-control"
                  placeholder="Company's Name Designation"
                  type="text"
                  name="name"
                  //   defaultValue="price"
                  {...register("company")}
                />
                <br />
                {/* <h5>Description: </h5> */}

                <textarea
                  rows="4"
                  cols="50"
                  className="form-control"
                  placeholder="Description"
                  type="text"
                  name="name"
                  //   defaultValue="Quantity"
                  {...register("description")}
                />

                <br />
                <input
                  className="submit-btn btn btn btn-danger brand-bg"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
