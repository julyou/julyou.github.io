import ReactMarkdown from "react-markdown";
import { Box } from "@mui/material";
import type { Experience } from "../types/experience";

interface ExperienceContentProps {
  experience: Experience;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  experience,
}) => {
  const companyName = experience.shortName ?? experience.company;

  return (
    <Box className="experience-card">
      <p className="experience title">
        {`${experience.title} @ ${companyName} ${experience.emoji}`}
      </p>
      <p className="experience">{experience.location}</p>
      <p className="experience">{`${experience.startDate} - ${experience.endDate}`}</p>
      <ul className="content">
        {experience.description.map((line) => (
          <li key={line}>
            <ReactMarkdown>{line}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ExperienceContent;
