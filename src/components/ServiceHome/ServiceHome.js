import React from 'react';
import { useHistory } from 'react-router';
import useServices from '../../customHooks/UseService';
import Service from '../Service/Service';

const ServiceHome = () => {
    const services = useServices();
    const filteredServices = services.filter(sv => sv.id <= 6);
    const history = useHistory();

    const handleSeeDetails = (id) => {
        history.push(`/${id}`);
    }

    return (
        <div className="my-16">
            <h1 className="text-5xl font-serif text-gray-700 text-center font-medium mb-16">Our Top Services</h1>
            <div className="grid md:grid-cols-3 gap-16 mx-4 md:mx-20">
                {
                    filteredServices.map(service => <Service handleSeeDetails={handleSeeDetails} key={services.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceHome;