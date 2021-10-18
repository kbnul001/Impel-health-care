import React from 'react';

const BannerBottom = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 mb-16 md:mx-40">
            <div className="text-center space-y-1">
                <i className="fas fa-user-md text-7xl text-red-500"></i>
                <h3 className="text-xl pt-2">Diagnose</h3>
                <h4 className="font-light">Examination and Diagnosis</h4>
            </div>
            <div className="text-center space-y-1">
                <i className="fas fa-plus-square text-7xl text-red-500"></i>
                <h3 className="text-xl pt-2">Treatment</h3>
                <h4 className="font-light">Treatment of the disease</h4>
            </div>
            <div className="text-center space-y-1">
                <i className="fas fa-wheelchair text-7xl text-red-500"></i>
                <h3 className="text-xl pt-2">Care Health</h3>
                <h4 className="font-light">Care and recuperation</h4>
            </div>
        </div>
    );
};

export default BannerBottom;