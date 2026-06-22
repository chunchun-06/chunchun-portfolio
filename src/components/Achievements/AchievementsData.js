import {
  Trophy,
  BadgeCheck,
  Code2,
  FolderGit2,
  GraduationCap,
} from "lucide-react";

export const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "Department Ideathon",
    description: "Secured 2nd Prize for presenting an innovative software solution during the Department Ideathon.",
    year: "2025",
    category: "Competition",
    badge: "🥈 Runner Up",
  },
  {
    id: 2,
    title: "Smart India Hackathon",
    description: "Selected among the top teams in Smart India Hackathon 2025.",
    year: "2025",
    category: "Hackathon",
    badge: "⭐ Pre-Finalist",
  },
  {
    id: 3,
    title: "Coding Competition",
    description: "Won 1st Prize in Coding Competition at Kongu Engineering College.",
    year: "2026",
    category: "Coding",
    badge: "🥇 1st Prize",
  },
  {
    id: 4,
    title: "CodeUp Champion",
    description: "Winner of CodeUp 2026.",
    year: "2026",
    category: "Competition",
    badge: "🏆 Winner",
  },
  {
    id: 5,
    title: "Frontend Development",
    description: "Secured 3rd Prize in Frontend Development Competition.",
    year: "2026",
    category: "Competition",
    badge: "🥉 3rd Prize",
  },
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Python for Machine Learning",
    organization: "HCL Technologies",
    year: "2026",
    category: "Professional Learning",
    badge: "completed",
  },
  {
    id: 2,
    title: "MERN Stack Development",
    organization: "Apna College",
    year: "2025–2026",
    category: "Certification",
    badge: "completed",
  },
  {
    id: 3,
    title: "Machine Learning & Deep Learning using Python",
    organization: "Kongu Engineering College",
    year: "2025",
    category: "Certification",
    badge: "Completed",
  },
  {
    id: 4,
    title: "Spring Boot Development",
    organization: "Kongu Engineering College",
    year: "2026",
    category: "Certification",
    badge: "Completed",
  },
  {
    id: 5,
    title: "DSA & Problem Solving",
    organization: "Apna College",
    year: "2026",
    category: "Certification",
    badge: "ongoing",
  },
];

export const STATS_DATA = [
  { id: 1, icon: Trophy, number: 5, suffix: "+", label: "Competition Awards" },
  { id: 2, icon: BadgeCheck, number: 4, suffix: "", label: "Professional Certifications" },
  { id: 3, icon: Code2, number: 200, suffix: "+", label: "DSA Problems Solved" },
  { id: 4, icon: FolderGit2, number: 2, suffix: "+", label: "Major Projects" },
  { id: 5, icon: GraduationCap, number: 8.54, suffix: "", label: "Current CGPA", isDecimal: true },
];
