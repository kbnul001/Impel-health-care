import React from 'react';

const Whycoose = () => {
    return (
        <div className="flex my-16 mx-16">
            <div className=" w-1/2 tracking-wide flex items-center justify-center">
                <article className="space-y-6">
                    <h3 className="text-2xl text-gray-500 uppercase">Why Choose Impel Health Care</h3>
                    <h3 className="text-3xl text-gray-700 font-semibold"><span className="text-indigo-500">The Best</span> For Your Health</h3>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                </article>
            </div>
            <div className="w-1/2 grid grid-cols-3">
                <div></div>
                <div className="rounded-full animate-pulse   border-4 border-red-700 w-36 h-36 flex items-center justify-center"><p>Top Doctors</p></div>
                <div></div>
                <div className="rounded-full animate-bounce bg-red-00 text-black border-4 border-red-700  w-36 h-36 flex items-center justify-center"><p>24 Hour Service</p></div>
                <div></div>
                <div className="rounded-full animate-bounce   text-black border-4 border-red-700  w-36 h-36 flex items-center justify-center"><p>Medical Serice</p></div>
                <div></div>
                <div className="rounded-full animate-pulse text-center  border-4 border-red-700  w-36 h-36 flex items-center justify-center"><p>Medical Counseling</p></div>
            </div>
        </div>
    );
};

export default Whycoose;