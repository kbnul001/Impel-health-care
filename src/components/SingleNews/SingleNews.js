import React from 'react';
import { Link } from 'react-router-dom';

const SingleNews = (props) => {
    const { img, title, details, url, key } = props;
    return (
        <div className="flex shadow-xl space-x-4 my-6">
            <div className="w-1/3">
                <img className="w-96 h-72" src={img} alt="" />
            </div>
            <div className="w-2/3 space-y-6">
                <h2 className="text-2xl font-medium">{title}</h2>
                <p className="mb-6">{details} </p>
                <a href={url} className="mt-4" target="_blank"><button className="py-2 my-10 rounded-2xl bg-indigo-400 text-white px-8 border"> Read More</button></a>
            </div>
        </div>
    );
};

export default SingleNews;