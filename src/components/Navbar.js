"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@fontsource/poppins";
import "animate.css"; // Import Animate.css

export default function Navbar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [animationClass, setAnimationClass] = useState(""); // For animation classes
    const pathname = usePathname();

    const toggleNavbar = () => {
        if (isNavbarCollapsed) {
            setAnimationClass("animate__animated animate__fadeInDown animate__faster"); // Faster animation for opening
        } else {
            setAnimationClass("animate__animated animate__fadeOutUp animate__faster"); // Faster animation for closing
        }
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    useEffect(() => {
        setIsNavbarCollapsed(true); // Collapse navbar on route change
        setAnimationClass(""); // Reset animation class
    }, [pathname]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#000000cc" }}>
            <div className="container">
                <Link className="navbar-brand fw-semibold" href="/">
                    Portfolio | Vishal
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isNavbarCollapsed ? "false" : "true"}
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-bar-chart-steps text-white"></i>
                </button>
                <div
                    className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"
                        } ${animationClass}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto fw-semibold">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/experience">
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
