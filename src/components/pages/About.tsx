import React, { useState } from "react";
import "../../styles/Home.css";
import Blob from "../../icons/Blob";
import ReactMarkdown from "react-markdown";
import aboutContent from "../../data/about.md";

// Second page: About page
const About: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // website URLs
  const ubcLink = "https://www.ubc.ca/";
  const cicLink =
    "https://aws.amazon.com/government-education/cloud-innovation-centers/";
  const awsLink = "https://aws.amazon.com/";

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
          <ReactMarkdown
            children={aboutContent
              .replace("{ubcLink}", ubcLink)
              .replace("{awsLink}", awsLink)
              .replace("{cicLink}", cicLink)}
          />
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
