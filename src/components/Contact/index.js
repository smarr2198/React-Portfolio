import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <a href="mailto:smarr2198@gmail.com" className="flat-button">
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/stephen-marr-b15b74225"
            className="flat-button"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
