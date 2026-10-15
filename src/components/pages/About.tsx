import React, { useRef } from "react";
import "../../styles/About.css";
import Blob from "../../icons/Blob";
import ReactMarkdown from "react-markdown";
import aboutContent from "../../data/about.md?raw";

// Second page: About page
const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // website URLs
  const ubcLink = "https://www.ubc.ca/";
  const cicLink =
    "https://aws.amazon.com/government-education/cloud-innovation-centers/";
  const awsLink = "https://aws.amazon.com/";
  const notionLink = "https://www.notion.com/";

  // starts playing video
  const playVideo = () => {
    // play() rejects if the browser blocks autoplay; nothing to do about it here
    void videoRef.current?.play().catch(() => {});
  };

  // stops video — pausing would leave the last frame on screen, so reload to
  // bring the poster back
  const stopVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.load();
  };

  // touch devices have no hover, so tapping toggles instead
  const toggleVideo = () => {
    if (videoRef.current?.paused) {
      playVideo();
    } else {
      stopVideo();
    }
  };

  return (
    <div className="section" id="about">
      <h1 className="section-header">
        <span>Nice to meet you!</span>
      </h1>

      <div className="section-intro">
        <p className="handwriting">hope you're doing well</p>
      </div>

      <div className="section-content">
        <div className="about-text">
          <ReactMarkdown
            children={aboutContent
              .replace("{ubcLink}", ubcLink)
              .replace("{awsLink}", awsLink)
              .replace("{cicLink}", cicLink)
              .replace("{notionLink}", notionLink)}
          />
        </div>

        {/* plays video on hover (or tap) otherwise shows the still photo.
            preload="none" keeps the clip off the critical path — it is only
            fetched once someone actually interacts, and dog.jpg stands in as
            the poster frame until then. */}
        <div
          className="about-profile"
          onMouseEnter={playVideo}
          onMouseLeave={stopVideo}
        >
          <Blob />
          <video
            ref={videoRef}
            className="profile"
            src="/assets/dog_animated2.mp4"
            poster="/assets/dog.jpg"
            width={1351}
            height={1582}
            aria-label="Julia with her dog"
            loop
            muted
            playsInline
            preload="none"
            onClick={toggleVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
