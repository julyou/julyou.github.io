import React from "react";
import { Typewriter } from "react-simple-typewriter";
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/Main.css";

// First page: Main/Home section
const Intro: React.FC = () => {
  // the typewriter is JS-driven, so CSS cannot quiet it; swap in static text
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)", {
    noSsr: true,
  });

  return (
    <div className="section">
      <div className="intro-content">
        <div className="intro-image">
          <picture>
            <source
              media="(prefers-reduced-motion: reduce)"
              srcSet="/assets/art_static.webp"
            />
            <img
              src="/assets/art_animated.webp"
              alt="Painting of two figures sitting together in warm lamplight"
              className="intro-img"
              width={1100}
              height={777}
              decoding="async"
            />
          </picture>
        </div>

        <h1>
          <span className="intro-greeting">
            {prefersReducedMotion ? (
              "Hello,"
            ) : (
              <Typewriter
                words={["Hello,", "Bonjour,", "你好,"]}
                loop={Infinity}
                cursor
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1800}
              />
            )}
          </span>
          <span className="intro-name">Julia</span>
          <span> here! 👋</span>
        </h1>

        <p className="intro-summary fade-in">
          I'm studying Computer Science at the University of British Columbia.
          <br></br>
          I'm always looking for new opportunities and would love to chat!
        </p>

        <p className="socials-text fade-in-socials-text">Let's connect!</p>
        <div className="social-icons">
          <a
            href="https://github.com/julyou"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon></GitHubIcon>
          </a>
          <a
            href="https://linkedin.com/in/juliahyou"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a
            href="mailto:juliayou604@gmail.com"
            aria-label="Email Julia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon></EmailIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
