import type { backendInterface } from "../backend";
import {
  personalInfo,
  skillCategories,
  experiences,
  projects,
  certifications,
  codingAchievements,
} from "../data/portfolioData";

export const mockBackend: backendInterface = {
  async getPersonalInfo() {
    return {
      name: personalInfo.name,
      title: personalInfo.title,
      email: personalInfo.email,
      phone: personalInfo.phone,
      location: personalInfo.location,
      linkedin: personalInfo.linkedin,
      github: personalInfo.github,
      website: personalInfo.website,
    };
  },

  async getSkills() {
    const skills: Array<{ name: string; level: bigint; category: string }> = [];
    for (const cat of skillCategories) {
      for (const skill of cat.skills) {
        skills.push({ name: skill, level: BigInt(80), category: cat.category });
      }
    }
    return skills;
  },

  async getExperiences() {
    return experiences.map((exp) => ({
      role: exp.role,
      company: exp.company,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: Array.isArray(exp.description)
        ? exp.description.join("\n")
        : exp.description,
    }));
  },

  async getProjects() {
    return projects.map((p) => ({
      name: p.name,
      description: p.description,
      technologies: p.technologies,
      link: p.link,
    }));
  },

  async getCertifications() {
    return certifications.map((c) => ({
      name: c.name,
      issuer: c.issuer,
      date: c.date,
    }));
  },

  async getEducation() {
    return [];
  },

  async getCodingAchievements() {
    return codingAchievements.map((a) => ({
      platform: a.platform,
      rank: a.rank,
      score: BigInt(a.rating),
    }));
  },
};
