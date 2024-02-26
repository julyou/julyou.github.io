import React, { useState } from "react";
import "../../styles/About.css";
import Blob from "../../icons/Blob";

const About: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // website URLs
  const ubcLink = "https://www.ubc.ca/";
  const linkToUpdate = "";
  const cicLink =
    "https://aws.amazon.com/government-education/cloud-innovation-centers/";

  // starts playing video
  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  // stops video
  const stopVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="section" id="about">
      <h1 className="section-header">
        <span>About</span>
      </h1>

      <div className="section-intro">
        <p className="handwriting"> nice to meet you!</p>
      </div>

      <div className="section-content">
        <div className="about-text">
          <p>
            I'm Julia, a fourth-year <strong>Computer Science</strong> student
            studying at the{" "}
            <a href={ubcLink} target="_blank" rel="noopener noreferrer">
              University of British Columbia (UBC)
            </a>{" "}
            interested in creating accessible tech for all people.
          </p>
          <p>
            Currently, I'm a{" "}
            <strong>Software Development Engineer Intern</strong> at{" "}
            <a href={linkToUpdate} target="_blank" rel="noopener noreferrer">
              ...
            </a>{" "}
            on the [...] team where I [...]. Previously, I worked as a{" "}
            <strong>Software Developer</strong> at the{" "}
            <a href={cicLink} target="_blank" rel="noopener noreferrer">
              UBC x AWS Cloud Innovation Centre
            </a>{" "}
            where I developed cloud-based prototypes to solve real-world
            challenges.
          </p>
          <p>
            Beyond software development, I enjoy teaching and developing
            educational material! I've developed open-source Python course
            material, served as a Teaching Assistant for an undergraduate
            software course, and led game-based scripting classes.
          </p>
          <p>
            When I'm not solving software puzzles, you can find me playing
            badminton, sketching/painting, or catching the sunset! 🏸 🎨 🌅
          </p>
        </div>

        {/* plays video on hover otherwise shows image */}
        <div className="about-profile">
          <Blob />
          <img
            src="/assets/dog.jpg"
            alt="Profile"
            className={`${isVideoPlaying ? "profile-hidden" : "profile"}`}
            onMouseOver={playVideo}
          />
          <video
            src="/assets/dog_animated2.mp4"
            className={`${!isVideoPlaying ? "profile-hidden" : "profile"}`}
            loop
            muted
            autoPlay
            onMouseOut={stopVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
