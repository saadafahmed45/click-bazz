import React from 'react';
import Header from '../Header/Header'
import Services from '../Services/Services'
import Professionaly from '../Professionaly/Professionaly'
import Contact from '../Contact/Contact'
import ReviewHome from '../ReviewHome/ReviewHome';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Professionaly></Professionaly>
            <ReviewHome></ReviewHome>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;