import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      email: data.email,
      Position: data.position,
    };
    console.log(eventData);

    const url = `https://secure-reaches-57604.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        // alert("Admin added Successfully");
        toast.error("New Admin Added successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <div className="make-admin">
            <h2>Make admin</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h5>Email:</h5>

              <input
                className="form-control mt-4"
                name="name"
                placeholder="xxxx00@email.com"
                {...register("email")}
              />
              <br />
              <h5>Position:</h5>
              <input
                className="form-control mt-4"
                name="name"
                placeholder="admin/athor/editor/writer"
                {...register("position")}
              />
              <br />
              <input
                className="submit-btn btn btn btn-danger brand-bg"
                type="submit"
              />
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
