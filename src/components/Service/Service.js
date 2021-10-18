import React from 'react';

const Service = (props) => {
    const { id, name, details, img } = props.service;
    const { handleSeeDetails } = props;
    return (
        <div>
            <div className="rounded-2xl transform hover:scale-105 ">
                <div className="">
                    <img className="" src={img} alt="" />
                </div>
                <div className="mt-4 p-4">
                    <h3 className="text-2xl text-center font-semibold">{name}</h3>
                    <p className="mb-4 text-center mt-6"> <span>{details.slice(0, 90)}...</span> </p>

                    <div className="text-center mt-6">
                        <button onClick={() => { handleSeeDetails(id) }} className="w-44 h-8 bg-indigo-500 text-white rounded-md focus:ring-2 focus:bg-purple-600 hover:bg-indigo-400"> See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;