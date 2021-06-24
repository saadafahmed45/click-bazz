import React from 'react';
import AddServices from '../AddServices/AddServices';
import Sidebar from '../Sidebar/Sidebar'
const Dashboard = () => {
    return (
        <div>
    <div className="row">
        <div className="col-md-2">
      <Sidebar></Sidebar>

        </div>
        <div className="col-md-8 mt-5">
        <h1>Welcome to The Dashboard</h1>
        <h5 className="brand-color">Now You can Change All Section... </h5>
        </div>
    </div>
        </div>
    );
};

export default Dashboard;