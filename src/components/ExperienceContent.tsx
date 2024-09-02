import ReactMarkdown from "react-markdown";
import { Box } from "@mui/material";

export interface Experience {
  company: string;
  companyAbbreviation: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

interface ExperienceContentProps {
  experience: Experience;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  experience,
}) => {
  const companyName = experience.companyAbbreviation || experience.company;

  return (
    <Box>
      <p className="experience title">{`${experience.title} @ ${companyName}`}</p>
      <p className="experience">{experience.location}</p>
      <p className="experience">{`${experience.startDate} - ${experience.endDate}`}</p>
      <ul className="content">
        {experience.description.map((line: string, i: number) => (
          <li key={i}>
            <ReactMarkdown>{line}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ExperienceContent;
