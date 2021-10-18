import React from 'react';

const Footer = () => {
    return (
        <div className=" w-full mt-8">
            <footer className="bg-black text-white">
                <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-coolGray-400">
                    <ul
                        className=" self-center py-6 space-y-4 font-light text-center md:space-x-8 sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Review Cart</li>
                        <li>Contact</li>
                    </ul>
                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                        <div className="flex justify-center space-x-12">
                            <a href=""><i className="fab fa-facebook-square text-2xl"></i></a>
                            <a href=""><i className="fab fa-linkedin text-2xl"></i></a>
                            <a href=""><i className="fab fa-instagram-square text-2xl"></i></a>
                            <a href=""><i className="fab fa-youtube text-2xl"></i></a>
                        </div>
                    </div>
                </div>
                {/* <p className="text-center pb-4"><small className=""> &copy; Impel Language Course</small></p> */}
            </footer>
        </div >
    );
};

export default Footer;