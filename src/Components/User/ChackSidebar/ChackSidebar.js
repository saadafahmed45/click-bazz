import React from 'react';
import { Link } from 'react-router-dom';
import './ChackSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faSignOutAlt, faCalendar, faGripHorizontal, faStar,faUserMd } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
{/* <i class="fas faUserMd"></i> */}
<i class="fas faStar"></i>

const ChackSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/checkOut/booking" className="text-white">
                    <FontAwesomeIcon icon={faBookmark} /> <span>Booking</span> 
                </Link>
            </li>
            <li>
                <Link to="/bookingList" className="text-white">
                    <FontAwesomeIcon icon={faCalendar} /> <span>Booking List</span> 
                </Link>
            </li>
            <li>
                <Link to="/addReview" className="text-white">
                    <FontAwesomeIcon icon={faStar}/> <span>Review</span>
                </Link>
            </li>
          
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Home</span></Link>
        </div>
    </div>
    );
};

export default ChackSidebar;