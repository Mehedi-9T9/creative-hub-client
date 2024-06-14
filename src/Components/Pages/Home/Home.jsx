import React from 'react';
import Bannar from './Bannar/Bannar';
import SectionTitle from '../../Shared/SectionTitle';
import Services from './Services/Services';
import OurWorks from './OurWorks/OurWorks';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <SectionTitle></SectionTitle>
            <Services></Services>
            <OurWorks></OurWorks>
            <SectionTitle></SectionTitle>
            <Review></Review>
        </div>
    );
};

export default Home;