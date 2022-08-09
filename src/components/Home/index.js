import LogoTitle from "../../assets/images/LetterS.png";
import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
// import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const openTag = "<h1>";
  const closeTag = "</h1>";

  const nameArray = [" ", "Stephen", " ", "Marr"];
  const jobArray = [" ", "web", " ", " developer"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className="hOne" {...letterClass}>
              {openTag}{" "}
            </span>
            {/* <span className={`${letterClass} _10`}>Hi,</span>
            <span className={`${letterClass} _11`}> </span>
            <span className={`${letterClass} _12`}>I'm</span> */}
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={nameArray}
              idx={13}
            />
            {/* <br /> */}
            {/* <AnimatedLetters
              lettersClass={letterClass}
              strArray={jobArray}
              idx={18}
            /> */}
            <span className="hOne" {...`${letterClass} _10`}>
              {" "}
              {closeTag}
            </span>
          </h1>
          <h2> Full Stack JavaScript Developer</h2>
          {/* <Link to="/about" className="flat-button">
            ABOUT ME
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
        </div>
      </div>
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
