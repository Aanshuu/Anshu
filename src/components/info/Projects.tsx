import { linkVertical } from "d3";
import { HoverEffect } from "../ui/card-hover-effect";
 
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects}/>
    </div>
  );
}
export const projects = [
  {
    title: "MindEase",
    description:
      "An AI-powered mental health companion that offers private and supportive conversations to help users navigate their emotions. With a focus on fostering emotional well-being, MindEase is designed to provide meaningful support whenever you need it.",
    github: "https://github.com/Aanshuu/MindEase-v3",
    liveSite: "https://mindease-nine.vercel.app/"
  },
  {
    title: "TaskD",
    description:
      "TaskD is a task management application that allows users to create, update, and sort tasks effortlessly. Featuring a Kanban board for easy tracking and status changes, taskD ensures user authentication for personalized task management and organization.",
    github: "https://github.com/Aanshuu/taskd",
    liveSite: "https://taskd-seven.vercel.app/"
  },
  {
    title: "Magic Media",
    description:
      "Delivered a responsive website within a tight two-week deadline, ensuring a pixel-perfect design and seamless user experience. Implemented features to enhance functionality and maintained full responsiveness across all devices.",
    github: "https://github.com/Aanshuu/MagicMedia",
    liveSite: "https://www.magicmedia.in/"
  },
  {
    title: "SYNC",
    description:
      "As a Frontend Developer Intern at a dynamic startup, I am responsible for managing tasks and assisting with various aspects of the project. My role involves contributing to the development of user-friendly interfaces and enhancing the overall user experience.",
    github: "private",
    liveSite: "https://sync.getsync.tech/"
  },
  {
    title: "Quizzical",
    description:
      "Quizzical is an interactive quiz app that provides real-time questions and answers, allowing users to track their performance across multiple quizzes and monitor their average scores over time.",
    github: "https://github.com/Aanshuu/Quizzical",
    liveSite: "https://quizzical-sepia-sigma.vercel.app/"
  },
];