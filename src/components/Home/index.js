import LogoTitle from "../../assets/images/LetterS.png";
import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    " ",
    "S",
    "t",
    "e",
    "p",
    "h",
    "e",
    "n",
    " ",
    "M",
    "a",
    "r",
    "r",
  ];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i,</span>
            <br />
            <span className={`${letterClass} _11`}>I</span>
            <span className={`${letterClass} _12`}>'m</span>
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={nameArray}
              idx={13}
            />
            <br />
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={jobArray}
              idx={26}
            />
          </h1>
          <h2> Full Stack JavaScript Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
