"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { useState } from "react";
// import ThemeToggle from "@/components/theme/ThemeToggle";
// import MatrixRain from "@/components/MatrixRain";
import TypewriterText from "@/components/TypewriterText";
import Slider from "@/components/Slider";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import Navbar from "@/components/common/Navbar";
import Diagram from "@/components/skills/Diagram";
import Flow from "@/components/skills/TechStackFlow";
import { Switch } from "@/components/ui/switch";
// import { CardHoverEffectDemo } from "@/components/info/Projects";
// import { NavigationButtons } from "@/components/Tabs";
import { ProjectsExperienceDemo } from "@/components/Tabs";

export default function Home() {
  const [showDiagram, setShowDiagram] = useState(false);

  const handleToggle = (checked: boolean) => {
    console.log("Switch toggled:", checked); // Debug log
    setShowDiagram(checked);
  };
  return (
    <ThemeProvider>
      {/* <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/508] w-[56.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>


      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative right-0 aspect-[1155/508] w-[56.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
          />
        </div>
      </div> */}

      <div className="relative h-screen">
        {/* <MatrixRain /> */}
        <Navbar />
        <MaxWidthWrapper className="h-full pt-28">
          <div className="flex md:flex-row gap-8 items-center justify-between">
            <div className="flex justify-center w-full md:w-1/2">
              <TypewriterText />
            </div>
            <div className="flex justify-center h-auto w-2/5 md:w-2/5">
              <Slider />
            </div>
          </div>
          {/* <Setup/> */}

          <div className="flex flex-col items-center justify-center mt-8">
            {/* Debug text */}
            {/* <p>Is the switch rendering below?</p> */}

            <Switch
              onCheckedChange={handleToggle}
              defaultChecked={showDiagram}
              className="bg-black dark:bg-white"
            />
            <div className="ml-4">
              <span className="text-sm text-gray-700">
                {showDiagram ? <Diagram /> : <Flow />} {/* Debug text */}
              </span>
            </div>
          </div>
          <div>
            <ProjectsExperienceDemo />
          </div>
        </MaxWidthWrapper>
      </div>
    </ThemeProvider>
  );
}
