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
            <SectionTitle></SectionTitle>
            <Services></Services>
            <OurWorks></OurWorks>
            <SectionTitle></SectionTitle>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;