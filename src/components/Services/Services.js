import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../customHooks/UseService';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = useServices();
    return (
        <div>
            <section className="service-banner md:h-96 flex justify-center items-center">
                <div className="text-center">
                    <h2 className="mt-8 md:mt-0 text-4xl md:text-5xl mb-6 font-serif tracking-widest">Our Services</h2>
                    <Link to="/"><button className="px-16 text-black hover:bg-indigo-300 rounded-md py-2 my-10 border border-gray-500"> Home &gt;&gt;</button></Link>
                </div>
            </section>

            <section className="text-center my-16">
                <h1 className="text-xl md:text-2xl font-serif mb-4 text-gray-500">We Care About Our Patient</h1>
                <h1 className="text-3xl md:text-4xl mb-10 font-serif">Our Outstanding Services</h1>
                <hr className="mx-auto w-3/4" />
            </section>



            <div className="grid md:grid-cols-3 gap-16 mx-4 md:mx-20">
                {
                    services.map(service => <Service key={services.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;