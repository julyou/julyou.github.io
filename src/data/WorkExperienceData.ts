interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

const WorkExperienceData: WorkExperience[] = [
  {
    company: "...",
    title: "Software Development Engineer Intern",
    startDate: "May 2024",
    endDate: "Aug 2024",
    location: "Vancouver, BC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    company: "UBC Cloud Innovation Centre",
    title: "Software Developer",
    startDate: "Sep 2023",
    endDate: "Apr 2024",
    location: "Vancouver, BC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    company: "University of British Columbia",
    title: "Undergraduate Teaching Assistant",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    location: "Vancouver, BC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

export default WorkExperienceData;
