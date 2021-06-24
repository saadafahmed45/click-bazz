import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./OrderList.css";

const OrderList = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    fetch("http://localhost:7000/ordersList")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="order-section">
            <h2>Order List</h2>
            {/* <h2>{orders?.length}</h2> */}

            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service</th>
                  <th scope="col">Pay With</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.service}</td>
                    <td>Credit Card</td>

                    <td>
                      <div class="dropdown">
                        <button
                          class="btn btn-white dropdown-toggle text-danger"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pending
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Done
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              On going
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              <h5>Total Orders: ( {orders?.length} )</h5>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
