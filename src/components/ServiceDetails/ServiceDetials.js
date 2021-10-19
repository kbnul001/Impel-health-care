import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../customHooks/UseService';

const ServiceDetials = () => {
    const { serviceId } = useParams();
    const { services } = useServices();

    const specificService = services.find(sv => sv.id == serviceId);

    return (
        <div className="my-20 md:mx-20 mx-6">

            <section className="md:flex md:gap-7">
                <div className="md:w-1/2"><img className="rounded-xl" src={specificService?.img} alt="" /></div>
                <div className="md:w-1/2 my-auto space-y-12">
                    <h1 className="text-5xl text-gray-700 font-serif"> {specificService?.name} </h1>
                    <p>{specificService?.details}</p>
                    <h3>
                        {
                            specificService?.availability ? <span className="text-xl border text-green-700 px-8 py-4 animate-pulse">Available</span> : <span className="text-xl border text-red-700 px-8 py-4 animate-pulse">Not Available Now</span>
                        }
                    </h3>
                    <Link to="/"><button className="px-16 text-black hover:bg-indigo-300 rounded-md py-2 my-10 border border-gray-500"> Home &gt;&gt;</button></Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetials;