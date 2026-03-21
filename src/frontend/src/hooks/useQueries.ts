import { useQuery } from "@tanstack/react-query";
import type {
  Certification,
  CodingAchievement,
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skill,
} from "../backend";
import { useActor } from "./useActor";

export function usePersonalInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<PersonalInfo>({
    queryKey: ["personalInfo"],
    queryFn: async () => {
      if (!actor) throw new Error("No actor");
      return actor.getPersonalInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSkills() {
  const { actor, isFetching } = useActor();
  return useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSkills();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useExperiences() {
  const { actor, isFetching } = useActor();
  return useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getExperiences();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProjects() {
  const { actor, isFetching } = useActor();
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCertifications() {
  const { actor, isFetching } = useActor();
  return useQuery<Certification[]>({
    queryKey: ["certifications"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCertifications();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useEducation() {
  const { actor, isFetching } = useActor();
  return useQuery<Education[]>({
    queryKey: ["education"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEducation();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCodingAchievements() {
  const { actor, isFetching } = useActor();
  return useQuery<CodingAchievement[]>({
    queryKey: ["codingAchievements"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCodingAchievements();
    },
    enabled: !!actor && !isFetching,
  });
}
