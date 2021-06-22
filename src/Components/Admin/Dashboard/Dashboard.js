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
        <div className="col-md-8">
        <h1>this is Dashboard</h1>
        </div>
    </div>
        </div>
    );
};

export default Dashboard;