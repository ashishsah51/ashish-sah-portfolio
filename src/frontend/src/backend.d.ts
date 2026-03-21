import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Certification {
    date: string;
    name: string;
    issuer: string;
}
export interface Skill {
    name: string;
    level: bigint;
    category: string;
}
export interface Experience {
    endDate?: string;
    role: string;
    description: string;
    company: string;
    startDate: string;
}
export interface Education {
    field: string;
    startYear: bigint;
    endYear: bigint;
    institution: string;
    degree: string;
}
export interface CodingAchievement {
    rank: string;
    platform: string;
    score: bigint;
}
export interface PersonalInfo {
    linkedin: string;
    title: string;
    name: string;
    email: string;
    website: string;
    phone: string;
    location: string;
    github: string;
}
export interface Project {
    link: string;
    name: string;
    description: string;
    technologies: Array<string>;
}
export interface backendInterface {
    getCertifications(): Promise<Array<Certification>>;
    getCodingAchievements(): Promise<Array<CodingAchievement>>;
    getEducation(): Promise<Array<Education>>;
    getExperiences(): Promise<Array<Experience>>;
    getPersonalInfo(): Promise<PersonalInfo>;
    getProjects(): Promise<Array<Project>>;
    getSkills(): Promise<Array<Skill>>;
}
