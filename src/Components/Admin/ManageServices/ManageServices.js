import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./ManageServices.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageServices = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("https://secure-reaches-57604.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  function deleteProduct(id) {
    console.log(id);
    fetch(`https://secure-reaches-57604.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        // alert('Services Deleted successfully');
        toast.success("Service Deleted successfully!   (reload the page)", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      // window.location.reload();
    });
  }

  return (
    <div className="manage-section">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-8 offset-1 mt-4">
          <div className="table-box ">
            <h3>Manage Services </h3>

            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr>
                    <td>{service._id}</td>
                    <td>{service.name}</td>
                    <td> ${service.price} </td>
                    <td>
                      <button
                        onClick={() => deleteProduct(`${service._id}`)}
                        className="btn btn-danger px-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
