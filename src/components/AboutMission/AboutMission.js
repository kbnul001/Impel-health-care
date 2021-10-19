import React from 'react';

const AboutMission = () => {
    return (
        <div>
            <div className="space-y-8 md:mx-40">
                <h2 className="text-indigo-400 text-3xl text-serif text-center">Our Mission and Vission</h2>
                {/* <hr className="w-1/3 md:pb-4 mx-auto border-black" /> */}
                <article className="md:flex md:mx-0 mx-4 space-y-4 md:space-y-0 text-gray-700 gap-16 tracking-wide text-justify">
                    <p className="border border-gray-300 p-8 md:p-12">Impel Health Care is committed to providing high-quality health care services to individual clients and their families, as well as to other healthcare organizations in need of supplemental staffing (such as certified home health and hospice agencies, health plans, hospitals, nursing homes and assisted living facilities).

                        Our priority is to provide state-of-the-art and compassionate in-home care from highly-trained medical professionals and aides. To make good on this promise, proper training is paramount. Not only do we hire the most experienced personnel, but we provide them with in-depth disease-specific training so that they can deliver specialized care to our clients.</p>
                    <p className="border border-gray-300 p-8 md:p-12">
                        At Impel Health Care, we believe everyone should have the opportunity to live a healthy, active and fulfilling life. This ethos is at the heart of everything we do.

                        We provide everyone we support with the opportunity to continue to live life to the full. We actively encourage Service Users to become more self-reliant, to make decisions for themselves, and ultimately, to move on to more independent living arrangements.

                        We facilitate and support our Service Users to pursue meaningful and personalised lifestyles. We provide individually planned education and leisure opportunities to support each individual in their ongoing development.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default AboutMission;