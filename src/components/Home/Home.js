import React from 'react';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import Header from '../Header/Header'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            < hr className="w-3/4 mx-auto border-gray-600" />
        </div>
    );
};

export default Home;