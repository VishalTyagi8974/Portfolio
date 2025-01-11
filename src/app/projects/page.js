"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { projects } from "./projectsData";
import "../globals.css"
import "../home.css"
import '@fontsource/poppins';


export default function ProjectsPage() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className="conts">
            <main className="">
                <div style={{ padding: "20px" }} >
                    <div className="container py-2  mt-4 mt-lg-5 " >
                        <h1 className="text-center mb-5 fw-semibold display-6 text-white ">My Projects</h1>
                        <div className="row " >
                            {projects.map((project, index) => (
                                <div className="col-md-6 mb-4" key={index} >
                                    <div className="card shadow bg-black rounded-4 silverCard  " style={{ overflow: "hidden", border: "1px solid gray", position: "relative", minHeight: "430px" }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body d-flex flex-column justify-content-around text-white" style={{ position: "absolute", bottom: "0", backgroundColor: "#20202095" }}>
                                            <h5 className="card-title fw-semibold glow">{project.title}</h5>
                                            <p className="card-text">{project.description}</p>
                                            <p>
                                                <strong>Tech Stack:</strong> {project.techStack}
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <a
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    className=" btn-grad"
                                                    rel="noopener noreferrer"
                                                    style={{ textDecoration: "none", fontSize: "0.8rem" }}


                                                >
                                                    Visit Website
                                                </a>
                                                {project.githubLink &&
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        className="btn-gradCode"
                                                        rel="noopener noreferrer"
                                                        style={{ textDecoration: "none", fontSize: "0.8rem" }}
                                                    >
                                                        View Code
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}
