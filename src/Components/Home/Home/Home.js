import React from 'react';
import Header from '../Header/Header'
import Services from '../Services/Services'
import Professionaly from '../Professionaly/Professionaly'
import Contact from '../Contact/Contact'
import ReviewHome from '../ReviewHome/ReviewHome';
import Footer from '../Footer/Footer';
import OurTeam from '../OurTeam/OurTeam';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Professionaly></Professionaly>
            <ReviewHome></ReviewHome>
            <OurTeam></OurTeam>
            <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;