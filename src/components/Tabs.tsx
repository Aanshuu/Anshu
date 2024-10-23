"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardHoverEffectDemo } from "./info/Projects";
import { TimelineDemo } from "./info/Experience";

// Define ButtonTab type for each section (e.g., Projects, Experience, Start-up)
type ButtonTab = {
  title: string;
  value: string;
  content: React.ReactNode;
};

// Component to render the buttons and their corresponding content
export const ButtonTabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  buttonClassName,
  contentClassName,
}: {
  tabs: ButtonTab[];
  containerClassName?: string;
  activeTabClassName?: string;
  buttonClassName?: string;
  contentClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState<ButtonTab>(tabs[0]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Button container */}
      <div
        className={cn(
          "flex flex-row items-center justify-start space-x-4 mb-8",
          containerClassName
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={cn("relative px-6 py-2 rounded-full", buttonClassName)}
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="activeButton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative text-black dark:text-white md:text-xl text-sm">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Smooth slide animation for content */}
      <motion.div
        key={activeTab.value}
        layoutId="content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className={cn("relative w-full h-full", contentClassName)}
      >
        {activeTab.content}
      </motion.div>
    </div>
  );
};

// Usage example
export function ProjectsExperienceDemo() {
  const tabs: ButtonTab[] = [
    {
      title: "Projects / Works",
      value: "projects",
      content: (
        <div>
          <CardHoverEffectDemo />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div>
          <TimelineDemo/>
        </div>
      ),
    },
    // {
    //   title: "Personal",
    //   value: "Personal",
    //   content: (
    //     <div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="min-h-[20rem] max-w-7xl mx-auto my-40">
      <ButtonTabs
        tabs={tabs}
        containerClassName="justify-center"
        activeTabClassName="shadow-md"
        buttonClassName="bg-gray-100 dark:bg-gray-700"
        contentClassName="mt-10"
      />
    </div>
  );
}
