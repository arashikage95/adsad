import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import akoImage from "../img/ako.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <section id="carton">
        <div className=" mt-2">
          <div className="col">
            <div className="card p-5">
              <div className="row">
                <div className="col-lg-5 text">
                  <h4 className="text-black fw-bold">A Little Bit About Me</h4>
                  <p>
                  currently a college student at Central Philippines State University, majoring in Information Technology. My academic journey has been focused on exploring various aspects of IT, with a particular passion for software development, cybersecurity, and emerging technologies.

Studying these subjects has not only sharpened my technical skills but also ignited a deep interest in problem-solving and innovation. I am fascinated by the potential of technology to transform industries and improve lives.
                   
                  </p>
                  <h4 className="text-black fw-bold">Academic Journey</h4>
                  <p>
                  in learning various programming languages such as C++, web development tools, and JavaScript. These languages have equipped me with the skills to develop software and build interactive websites capable of performing impressive functions.
            
                  </p>
                </div>
                <div className="col-lg-5 mb-9">
                  <center>
                    <img
                      src={akoImage}
                      alt="Profile Picture of Layca Florin"
                    />
                  </center>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <br/>  <br/>
          <h1><b>Education</b></h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2020</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                       Kabankalan Catholic College
                      </h4>
                      <p className="text-secondary">
                       Kabankalan City Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2018</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Kabankalan National High School
                      </h4>
                      <p className="text-secondary">
                        Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">ERAMS - West</h4>
                      <p className="text-secondary">
                         Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
