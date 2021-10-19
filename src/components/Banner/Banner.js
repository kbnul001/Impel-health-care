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
                    <a href="https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=" target="_blank" rel="noopener noreferrer"><button className="px-6 py-2 border hover:text-indigo-500 border-gray-500 rounded">Eat an Apple &gt;&gt;</button></a>

                </article>
            </div>
        </div>
    );
};

export default Banner;