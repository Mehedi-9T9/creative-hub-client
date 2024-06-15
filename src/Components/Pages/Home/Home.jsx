import React from 'react';
import Bannar from './Bannar/Bannar';
import SectionTitle from '../../Shared/SectionTitle';
import Services from './Services/Services';
import OurWorks from './OurWorks/OurWorks';
import Review from './Review/Review';
import Navbar from '../Navbar/Navbar'
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <SectionTitle heading_1="Our Awesome" heading_2="Services"></SectionTitle>
            <Services></Services>
            <OurWorks></OurWorks>
            <SectionTitle heading_1="Clients" heading_2="Feedback"></SectionTitle>
            <Review></Review>

            <Footer></Footer>
        </div>
    );
};

export default Home;