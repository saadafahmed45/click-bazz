import React from 'react';
import Header from '../Header/Header'
import Services from '../Services/Services'
import Professionaly from '../Professionaly/Professionaly'
import Contact from '../Contact/Contact'
import ReviewHome from '../ReviewHome/ReviewHome';
import Footer from '../Footer/Footer';
import OurTeam from '../OurTeam/OurTeam';
import SliderSection from '../SliderSection/SliderSection';
const Home = () => {
    return (
        <div>
            <SliderSection></SliderSection>

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