"use client"
import styles from "./page.module.css";
import "./home.css"
import "./globals.css"
import AnimatedLogoBall from "@/components/AnimatedLogoBall";
import RotatingLogo from "../components/RotatingLogo";
import '@fontsource/poppins';


export default function Home() {



  return (
    <div className="conts  ">
      <main className="">
        <div className="about">
          <div className="transparentBg shadow d-flex align-items-center">
            <div className=" container d-flex justify-content-start align-items-center">
              <div className="me-md-5  mt-2  " >
                <h1 className=" display-4 text-start ">
                  Hi,  I’m <br /><span className="boldCh display-1"><RotatingLogo /> </span>

                </h1>
                <p className="ms-1 ms-md-2" >Software Developer</p>
              </div>
              {/* <img style={{ maxWidth: "500px" }} className="img-fluid" src="./vLogo.png" /> */}

            </div>


          </div>
          <div className="container  pt-5 pb-md-3">
            <h2 className="display-4 text-white fw-bold mb-4">
              Overview
            </h2>

            <p>I’m a passionate <span className="boldCh">Software Engineer</span> who thrives on solving complex problems and learning new technologies on the fly. With a strong foundation in <span className="boldCh">data structures and algorithms</span>, I excel at adapting to diverse challenges and building scalable, efficient solutions.
            </p>
            <p>
              While my expertise lies in <span className="boldCh">full-stack development</span> using technologies like <span className="boldCh">React</span>, <span className="boldCh">Node.js</span>, and <span className="boldCh">MongoDB</span>, I don’t limit myself to any single domain. I believe in continuously evolving as a developer, whether it’s mastering new tools, frameworks, or paradigms.
            </p>
            <p>
              Driven by curiosity and creativity, I’m always ready to tackle the next big challenge. Let’s create something extraordinary together!
            </p>
          </div>

          <AnimatedLogoBall />
        </div>
      </main >

    </div >
  );
}
