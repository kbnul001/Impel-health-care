import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleNews from '../SingleNews/SingleNews';

const HealthNews = () => {
    const [news, setNews] = useState([]);
    const [newsLoaded, setNewsLoaded] = useState(false);
    useEffect(() => {
        fetch('/news_data.json')
            .then(res => res.json())
            .then(data => {
                setNews(data.articles)
                setNewsLoaded(true);
            })

    }, [])

    const articles = news;
    return (
        <div>
            <section className="service-banner md:h-96 flex justify-center items-center">
                <div className="text-center">
                    <h2 className="mt-8 md:mt-0 text-4xl md:text-5xl mb-6 font-serif tracking-widest">Health News of America</h2>
                    <Link to="/"><button className="px-16 text-black hover:bg-indigo-300 rounded-md py-2 my-10 border border-gray-500"> Home &gt;&gt;</button></Link>
                </div>
            </section>
            {
                !newsLoaded ?
                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                    :
                    <section className="grid grid-cols-1 mx-8 md:mx-20">
                        {
                            articles?.map(nw => <SingleNews
                                key={nw.publishedAt}
                                img={nw.urlToImage}
                                title={nw.title}
                                details={nw.description}
                                url={nw.url}
                            ></SingleNews>)
                        }
                    </section>}
        </div>
    );
};

export default HealthNews;