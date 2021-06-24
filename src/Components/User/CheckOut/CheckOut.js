import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import ChackSidebar from "../ChackSidebar/ChackSidebar";
import { UserContext } from "../../../App";
import "./CheckOut.css";
import ProcessPayment from "../../Home/ProcessPayment/ProcessPayment";

const CheckOut = () => {
  // add checkout  start
  const { _id } = useParams();
  console.log(_id);
  const [cost, setCost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setCost(data));
  }, []);
  const addCart = cost.find((pd) => pd._id == _id);
  console.log(addCart);
  // order

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      ...loggedInUser,
      service: addCart?.name,
      price: addCart?.price,
      // shipment: shippingData,
      number: data.number,
      orderTime: new Date(),
      // paymentId,
      description: addCart.description,
    };
    console.log(eventData);

    const url = `http://localhost:7000/addOrder`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        alert(" Your order is processed ");
      }

      console.log("server side order adding");
    });
  };

 

  // console.log(watch("example"));
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <ChackSidebar></ChackSidebar>
        </div>

        <div className="col-md-8">
          <div className="cost-form">
            <h3>Booking</h3>

            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={loggedInUser.name}
                className="form-control mt-3"
                name="name"
                placeholder="Your Name"
                {...register("name")}
              />

              <br />
              <input
                defaultValue={loggedInUser.email}
                className="form-control"
                name="email"
                placeholder="Your Email"
                {...register("true")}
              />

              <br />

              <input
                className="form-control"
                name="servicesName"
                placeholder={addCart?.name}
                {...register("example")}
              />

              <br />

              <input
                className="form-control"
                name="number"
                placeholder="Your Phone Number"
                {...register("number")}
              />
              <br />

              <div style={{ textAlign: "left" }} className="payment">
                <p>Pay with </p>
                <ProcessPayment></ProcessPayment>
              </div>
              <br />
              <p>
                Your services charge will be <b>${addCart?.price}</b>
              </p>
              <input
                className="submit-btn btn btn btn-danger brand-bg"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;