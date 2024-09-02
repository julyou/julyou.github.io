interface WorkExperience {
  company: string;
  companyAbbreviation: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

const WorkExperienceData: WorkExperience[] = [
  {
    company: "Amazon Web Services ☁️",
    companyAbbreviation: "AWS ⛅︎",
    title: "Software Development Engineer Intern",
    startDate: "May 2024",
    endDate: "Aug 2024",
    location: "Vancouver, BC",
    description: [
      "Designed developed a new service for AWS Payments responsible for creating tickets to other groups when known data discrepancies occur",
      "Got to work with some cool AWS Services to create an event-driven architecture that is secure, extensible, and will help improve pain points experienced by the AWS Commerce Platform!",
    ],
  },
  {
    company: "UBC Cloud Innovation Centre 🌱",
    companyAbbreviation: "UBC CIC 🌱",
    title: "Software Developer",
    startDate: "Sep 2023",
    endDate: "Apr 2024",
    location: "Vancouver, BC",
    description: [
      "Architected and developed an invasive plant database management system used to identify invasive species in British Columbia and Ontario",
      "Led the extraction and transformation of data, overseeing the storage of 90+ invasive species and 120+ alternative in Amazon RDS",
    ],
  },
  {
    company: "University of British Columbia 📚",
    companyAbbreviation: "UBC 📚",
    title: "Undergraduate Teaching Assistant",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    location: "Vancouver, BC",
    description: [
      "Mentored a cohort of 30 students in a 2nd-year software construction course",
      "Oversaw lab sessions, conducted regular office hours, graded exams, and provided guidance in developing term-long individual Java projects",
    ],
  },
  {
    company: "BC Children Hospital Research Institute 🏥",
    companyAbbreviation: "BCCHR 🏥",
    title: "Python Training Assistant",
    startDate: "May 2022",
    endDate: "Aug 2023",
    location: "Vancouver, BC",
    description: [
      "Crafted a series of 9 interactive Jupyter Notebook modules designed to teach functional programming practices in Python as part of the Silent Genomes Project",
      "Conducted pilot courses for 20 BCCHR research interns, (Postdocs, medical students, undergraduate students) and 15 high school students to iteratively improve the curriculum",
    ],
  },
  {
    company: "Wiz Kid Learning 🧩",
    companyAbbreviation: "",
    title: "Coding Instructor",
    startDate: "May 2021",
    endDate: "Aug 2022",
    location: "Toronto, ON (remote)",
    description: [
      "Delivered 20+ instructive weekly classes and summer camps to youth aged 6-18",
      "Taught the foundational skills of programming and game developement using Python, Lua Scripting, and Scratch",
    ],
  },
];

export default WorkExperienceData;
