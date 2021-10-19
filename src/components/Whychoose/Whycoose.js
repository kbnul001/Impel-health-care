import React from 'react';

const Whycoose = () => {
    return (
        <div className="md:flex my-16 md:mx-16 mx-5 space-y-8">
            <div className=" md:w-1/2 md:pr-3 tracking-wide flex items-center justify-center">
                <article className="space-y-6">
                    <h3 className="text-xl md:text-2xl text-center md:text-left  text-gray-500 uppercase">Why Choose Impel Health Care</h3>
                    <h3 className="text-2xl md:text-3xl text-center md:text-left text-gray-700 font-semibold"><span className="text-indigo-500">The Best</span> For Your Health</h3>
                    <p className="md:text-left text-center font-light">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                </article>
            </div>

            <div className="md:w-1/2 grid grid-cols-3 w-full">
                <div></div>
                <div className="text-center text-xs md:text-md rounded-full animate-pulse   border-4 border-red-700 md:w-36 md:h-36 w-24 h-24 flex items-center justify-center"><p>Top Doctors</p></div>
                <div></div>
                <div className="text-xs text-center md:text-md rounded-full animate-bounce bg-red-00 text-black border-4 border-red-700  md:w-36 md:h-36 w-24 h-24 flex items-center justify-center"><p>24 Hour Service</p></div>
                <div></div>
                <div className="text-center text-xs md:text-md rounded-full animate-bounce   text-black border-4 border-red-700  md:w-36 md:h-36 w-24 h-24 flex items-center justify-center"><p>Medical Serice</p></div>
                <div></div>
                <div className="text-center text-xs md:text-md rounded-full animate-pulse  border-4 border-red-700  md:w-36 md:h-36 w-24 h-24 flex items-center justify-center"><p>Medical Counseling</p></div>
            </div>

        </div >
    );
};

export default Whycoose;