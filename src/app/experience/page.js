import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css"
import "../home.css"
import '@fontsource/poppins';



const Experience = () => {
    return (
        <div
            className="container text-light w-100 h-100 py-5 ">


            <div className=' py-4 p-4 p-md-5 rounded-4 shadow ' style={{ backgroundColor: "#ffffff11" }}>
                <h1 className="text-center mb-5 mb-md-5 display-6 fw-semibold text-white">Experience</h1>
                <div className="mb-4">
                    {/* PowerCash Section */}
                    <div className='d-flex justify-content-between w-100'>
                        <div className='me-3'>
                             <h2 className='fw-semibold'>PowerCash</h2>
                            <h5>Sole Web Developer</h5>
                        </div>
                        <img
                            src="/PowerCashLogo.png" // Place the logo in the 'public/images' folder
                            alt="PowerCash Logo"
                            className="d-none d-md-block mb-4 rounded-3 mt-1 shadow "
                            style={{
                                maxWidth: "150px"
                            }}
                        />
                        <img
                            src="/PowerCashIcon.png" // Place the logo in the 'public/images' folder
                            alt="PowerCash Logo"
                            className="d-block d-md-none mb-4 rounded-3 mt-1 shadow "
                            style={{
                                maxWidth: "60px"
                            }}
                        />

                    </div>
                    <p>
                        <strong>Live Project:</strong>{" "}
                        <a
                            href="https://powercash.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-info"
                        >
                            powercash.io
                        </a>
                    </p>
                    <ul>
                        <li>
                            Designed and deployed a fully functional website for PowerCash,
                            ensuring a professional and user-friendly design.
                        </li>
                        <li>
                            Focused on creating a scalable, secure, and responsive web
                            application to meet client needs.
                        </li>
                    </ul>
                    <p>
                        <strong>Technologies Used:</strong> React, Hostinger, React Router,
                        Bootstrap, Node.js
                    </p>
                </div>

                {/* Dashboard Project Section */}
                <div className="mb-4">
                    <h3>Dashboard Project (In Progress)</h3>
                    <ul>
                        <li>
                            Developing an advanced dashboard for PowerCash to streamline their
                            operational processes.
                        </li>
                        <li>
                            Incorporating features such as data visualization, real-time
                            updates, and admin management tools.
                        </li>
                    </ul>
                    <p>
                        <strong>Technologies Used:</strong> React (frontend), Node.js/Express
                        (backend), MongoDB (database), JWT, Passport.js, Bootstrap, Hostinger
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Experience;
