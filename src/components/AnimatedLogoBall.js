import React from "react";
import styles from "./AnimatedLogoBall.module.css"; // Import the CSS module

const logos = [
    { src: "tech/html.png", alt: "HTML5 Logo" },
    { src: "tech/css.png", alt: "CSS3 Logo" },
    { src: "tech/js.png", alt: "JavaScript Logo" },
    { src: "tech/react.svg", alt: "React Logo" },
    { src: "tech/bootstrap.svg", alt: "Bootstrap Logo" },
    { src: "tech/node.png", alt: "Node.js Logo" },
    { src: "tech/express.png", alt: "Express.js Logo" },
    { src: "tech/mongo.png", alt: "MongoDB Logo" },
    { src: "tech/next.png", alt: "Next.js Logo" },
    { src: "tech/redux.png", alt: "redux Logo" },
    { src: "tech/python.png", alt: "Python Logo" },
    { src: "tech/passportjs.svg", alt: "passportLogo" },
    { src: "tech/jwt.jpeg", alt: " jwt Logo" },
    { src: "tech/figma.png", alt: "figma logo" },
    { src: "tech/vercel.png", alt: "Vercel Logo" },
    { src: "tech/github.png", alt: "GitHub Logo" }
];

const InteractiveLogoBall = () => {
    return (
        <div className={styles.techSection}>
            <div className=' mb-4  px-3 px-md-5 rounded-4 shadow mx-2 mx-md-5  ' style={{ backgroundColor: "#ffffff11", marginTop: "70px" }}>
                <h2 className="display-4 text-white fw-bold  pt-5">Technologies</h2>

                <div className={styles.logoContainer}>

                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={styles.logo}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default InteractiveLogoBall;
