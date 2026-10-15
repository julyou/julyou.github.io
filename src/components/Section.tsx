import React from "react";

interface SectionProps {
  id: string;
  heading: string;
  intro: string;
  /** About uses the handwriting face for its intro line; Experience does not. */
  introClassName?: string;
  children: React.ReactNode;
}

// The heading / intro / content scaffolding shared by the page's sections.
const Section: React.FC<SectionProps> = ({
  id,
  heading,
  intro,
  introClassName,
  children,
}) => (
  <div className="section" id={id}>
    <h2 className="section-header">
      <span>{heading}</span>
    </h2>

    <div className="section-intro">
      <p className={introClassName}>{intro}</p>
    </div>

    <div className="section-content">{children}</div>
  </div>
);

export default Section;
