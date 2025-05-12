export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
