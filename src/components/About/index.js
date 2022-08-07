import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            My Name is Stephen Marr. I graduated from Illinois State University
            with a Computer System Technology (CST) degree. I Also Graduated
            from a Development Bootcamp through Northwestern Univeristy where i
            learned Full Stack JavaScript web development.
          </p>
          <p>
            I am extremely ambitious to keep learning web development and am
            looking forward to showing what i can do. I currently work as a
            backend developer using Node.js with MongoDB.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {/* <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div> */}
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            {/* <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div> */}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
