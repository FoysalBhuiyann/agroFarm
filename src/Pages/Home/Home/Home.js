import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import ContactUs from '../ContactUs/ContactUs';
import Details from '../Details/Details';
import InfoCards from '../InfoCards/InfoCards';
import MembersList from '../MembersList/MembersList';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Details></Details>
            <Care></Care>
            <MembersList></MembersList>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;