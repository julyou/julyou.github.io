import React from "react";
import { Typewriter } from "react-simple-typewriter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/About.css";

// First page: Main/Home section
const Intro: React.FC = () => {
  return (
    <div className="section">
      <div className="intro-content">
        <div className="intro-image">
          <img src="/assets/art_animated.png" alt="art" className="intro-img" />
        </div>

        <h1>
          <span className="intro-greeting">
            <Typewriter
              words={["Hello,", "Bonjour,", "你好,"]}
              loop={Infinity}
              cursor
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1800}
            />
          </span>
          <span className="intro-name">Julia</span>
          <span> here! 👋</span>
        </h1>

        <p className="intro-summary fade-in">
          I'm a fourth-year Computer Science student studying at the University
          of British Columbia.<br></br>
          I'm always looking for new opportunities and would love to chat!
        </p>

        <p className="socials-text fade-in-socials-text">Let's connect!</p>
        <div className="social-icons">
          <a
            href="https://github.com/julyou"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in-delay-1"
          >
            <GitHubIcon></GitHubIcon>
          </a>
          <a
            href="https://linkedin.com/in/juliahyou"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in-delay-2"
          >
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a
            href="mailto:juliayou604@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in-delay-3"
          >
            <EmailIcon></EmailIcon>
          </a>
        </div>
      </div>

      {/* <div className="separator"></div> */}
    </div>
  );
};

export default Intro;
