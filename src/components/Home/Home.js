import React from 'react';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import Header from '../Header/Header'
import ServiceHome from '../ServiceHome/ServiceHome';
import Whycoose from '../Whychoose/Whycoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            < hr className="w-3/4 mx-auto border-gray-600" />
            <Whycoose></Whycoose>
            < hr className="w-3/4 mx-auto border-gray-600" />
            <ServiceHome></ServiceHome>
        </div>
    );
};

export default Home;