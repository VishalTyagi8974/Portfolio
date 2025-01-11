import "../home.css"
import "../globals.css"
import "./contact.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fontsource/poppins';


// import "./Contact.css"

export default function Contact() {
    return (
        <div className=" d-flex flex-column align-items-center  w-100  text-start  " style={{ color: " #E0E0E0", overflow: "hidden" }}>
            <section className="d-flex flex-column justify-content-start align-items-center justify-content-lg-center " style={{ minHeight: "90vh" }}>
                <div className="row mx-3 mx-lg-0  my-5 d-flex align-items-center justify-content-around" style={{ maxWidth: "950px" }}>
                    <div className="col-lg-6 mb-4 " style={{ maxWidth: "600px" }}>
                        <h1 className="text-white fw-bold mb-4">Get in Touch...</h1>
                        <p >I’d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out to me. You can contact me via email or connect with me on my social media platforms. I strive to respond promptly and ensure you have the best experience possible. Let’s make communication simple and seamless. Your thoughts matter to me!</p>
                    </div>
                    <div className="col-lg-6 ">
                        <div className=" rounded-4 text-white p-4 shadow d-flex flex-column justify-content-around mx-auto " style={{ maxWidth: "290px", minHeight: "340px", backgroundColor: "#ffffff11" }}>
                            <div>
                                <h3 className="mb-2 fw-bold">Contact Me</h3>
                                <p className="mb-3 fw-light" style={{ color: " #E0E0E0", fontSize: "0.9rem" }}>Click the button below to Email me.</p>
                                <a className='text-white btn mb-3 rounded-4 p-1' href="mailto:vishalaajps@gmail.com" style={{ backgroundColor: "#0059FF", width: "130px", height: "33px" }}>Email Me</a>
                            </div>
                            <div> <p className=" my-3" style={{ marginLeft: "8px" }}>Need More Help?</p>
                                <div className="d-flex w-100 justify-content-around mb-0 ">
                                    <a href="https://www.linkedin.com/in/vishal-tyagi-b62ba3230" target="_blank" rel="noopener noreferrer" className="policies">
                                        <i className="bi bi-linkedin " style={{ fontSize: "1.2rem" }}></i>

                                    </a>
                                    <a href="https://github.com/VishalTyagi8974" target="_blank" rel="noopener noreferrer" className="policies">
                                        <i className="bi bi-github " style={{ fontSize: "1.2rem" }} ></i>

                                    </a>
                                    <a href="https://leetcode.com/u/vishaltyagi8974" target="_blank" rel="noopener noreferrer" className="policies " style={{ marginTop: "3px" }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 17 17"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                fill="currentColor"
                                            ></path>
                                        </svg>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}