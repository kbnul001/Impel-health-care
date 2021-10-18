import React from 'react';
import './Banner.css';
import img from '../../images/banner/stethoscope.png';

const Banner = () => {
    return (
        <div className="banner-top md:flex bg-indigo-100 my-12 pb-8 md:pb-0">
            <div className="md:w-1/2  p-16 flex items-center justify-center"><img className="md:w-3/4 " src={img} alt="" /></div>
            <div className="flex  items-center justify-center md:w-1/2">
                <article className="space-y-5 text-center">
                    <h3 className="md:text-5xl text-4xl font-serif tracking-widest text-center">Your Health</h3>
                    <h3 className="md:text-6xl text-5xl pb-8 font-serif tracking-widest text-indigo-500">Our Priority</h3>
                    <button className="px-6 py-2 border hover:text-indigo-500 border-gray-500 rounded">Eat an Apple &gt;&gt;</button>

                </article>
            </div>
        </div>
    );
};

export default Banner;