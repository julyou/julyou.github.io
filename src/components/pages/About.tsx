import React, { useRef } from "react";
import "../../styles/About.css";
import Blob from "../../icons/Blob";
import ReactMarkdown from "react-markdown";
import Section from "../Section";
import aboutContent from "../../data/about.md?raw";

// Placeholders in about.md, resolved by name. Previously four URLs were
// declared and chained through .replace(); only two of them appeared in the
// markdown, so the other two silently did nothing.
const LINKS: Record<string, string> = {
  notionLink: "https://www.notion.com/",
  awsLink: "https://aws.amazon.com/",
};

const aboutText = aboutContent.replace(
  /\{(\w+)\}/g,
  (match, name: string) => LINKS[name] ?? match
);

// Second page: About page
const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <Section
      id="about"
      heading="Nice to meet you!"
      intro="hope you're doing well"
      introClassName="handwriting"
    >
      <div className="about-text">
        <ReactMarkdown>{aboutText}</ReactMarkdown>
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
          aria-label="Julia’s dog. Hover or tap to play a short clip."
          loop
          muted
          playsInline
          preload="none"
          onClick={toggleVideo}
        />
      </div>
    </Section>
  );
};

export default About;
