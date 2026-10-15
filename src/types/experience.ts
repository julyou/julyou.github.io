// Shared shape for a job entry. Previously declared twice — once in
// WorkExperienceData and again in ExperienceContent — field for field.
export interface Experience {
  company: string;
  /** Shorter form used in the body copy when the full name is unwieldy. */
  shortName?: string;
  emoji: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}
