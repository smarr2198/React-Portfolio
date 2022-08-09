import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const openTag = "<h1>";
  const closeTag = "</h1>";
  const nameArray = ["Contact", " ", "Me"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="containing contact-page">
        <div className="text-zone">
          <h1>
            <span className="hOne" {...letterClass}>
              {openTag}{" "}
            </span>
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <span className="hOne" {...`${letterClass} _10`}>
              {" "}
              {closeTag}
            </span>
          </h1>
          <p className="">
            Currently Looking for a web development position. <br />
            Interested in frontend, backend, or fullstack. <br /> Knowledgeable
            in JavaScript, React.js, Node.js, Express.js, HTML, CSS, SQL, and
            MongoDB
          </p>

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

export default Contact;
