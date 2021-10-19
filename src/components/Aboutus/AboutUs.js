import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            {/* banner */}
            <section className="aboutus md:h-96 flex justify-center items-center">
                <div className="text-center">
                    <h2 className="mt-8 md:mt-0 text-4xl md:text-5xl mb-6 font-serif tracking-widest">About Us</h2>
                    <Link to="/"><button className="px-16 text-black hover:bg-indigo-300 rounded-md py-2 my-10 border border-gray-500"> Home &gt;&gt;</button></Link>
                </div>
            </section>
            {/* After banner */}
            <section className="text-center my-16">
                <h1 className="text-xl md:text-2xl font-serif mb-4 text-gray-500">We Support People To Live An Extraordinary Life</h1>
                <h1 className="text-3xl md:text-4xl mb-10 font-serif">Explore About Us</h1>
                <hr className="mx-auto w-3/4" />
            </section>
            {/* Nav Bar */}
            <section>

                <BrowserRouter>
                    <nav className="space-x-7 text-center">
                        <Link to="/about/journey">Our Journey</Link>
                        <Link to="/about/mission">Our Mission and Vision</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/about/journey">

                        </Route>
                        <Route exact path="/about/mission">
                            <p className="text-2xl">Our Mission</p>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </section>
        </div>
    );
};

export default AboutUs;