import React from 'react';

const SingleNews = (props) => {
    const { img, title, details, url, key } = props;
    return (
        <div className="md:flex shadow-xl space-x-4 my-6">
            <div className="md:w-1/3 mb-6 md:mb-0">
                <img className="md:w-96 w-full md:h-72" src={img} alt="" />
            </div>
            <div className="md:w-2/3 space-y-6">
                <h2 className="text-2xl font-medium">{title}</h2>
                <p className="mb-6">{details} </p>
                <a href={url} className="mt-4" target="_blank"><button className="py-2 my-10 rounded-2xl bg-indigo-400 text-white px-8 border"> Read More</button></a>
            </div>
        </div>
    );
};

export default SingleNews;