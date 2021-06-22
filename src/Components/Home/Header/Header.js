import React from 'react';
import Navbar from '../../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
const Header = () => {
    return (
       <section className="header-section">
         <Navbar></Navbar>
       <HeaderMain></HeaderMain>
       </section>
    );
};

export default Header;