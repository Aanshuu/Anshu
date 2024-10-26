"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { useEffect, useState } from "react";
// import ThemeToggle from "@/components/theme/ThemeToggle";
// import MatrixRain from "@/components/MatrixRain";
import TypewriterText from "@/components/TypewriterText";
import Slider from "@/components/Slider";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import Navbar from "@/components/common/Navbar";
import Diagram from "@/components/skills/Diagram";
import Flow from "@/components/skills/TechStackFlow";
// import { Switch } from "@/components/ui/switch";
// import { CardHoverEffectDemo } from "@/components/info/Projects";
// import { NavigationButtons } from "@/components/Tabs";
import { ProjectsExperienceDemo } from "@/components/Tabs";
import Loader from "@/components/Loader";

export default function Home() {
  const [showDiagram, setShowDiagram] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },2000);
    return () => clearTimeout(timer);
  },[]);
  // const [decorativeTheme, setDecorativeTheme] = useState(false);

  const handleToggle = (checked: boolean) => {
    console.log("Switch toggled:", checked); // Debug log
    setShowDiagram(checked);
  };
  // const handleToggleDecorativeTheme = (checked: boolean) => {
  //   console.log("Switch toggled:", checked); // Debug log
  //   setDecorativeTheme(checked);
  // }
  if (loading) {
    return <Loader />;
  }
  return (
    <ThemeProvider>
      {/* {decorativeTheme ? (
        <>
          <div>
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
          </div>
        </>
      ) : null} */}

      <div className="relative h-screen">
        {/* {decorativeTheme ? <MatrixRain /> : null} */}
        <div className="fixed top-0 w-full z-50">
          <Navbar />
        </div>

        <MaxWidthWrapper className="h-full pt-28">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex justify-center items-center w-full md:w-1/2">
              <TypewriterText />
            </div>
            <div className="flex justify-center h-auto w-5/6 md:w-2/5 mt-6 md:mt-0">
              <Slider
                onToggle={handleToggle}
                showDiagram={showDiagram}
                // onToggleDecorativeTheme={handleToggleDecorativeTheme}
                // decorativeTheme={decorativeTheme}
              />
            </div>
          </div>
          {/* <Setup/> */}

          <div className="flex flex-col items-center justify-center mt-8">
            {/* Debug text */}
            {/* <p>Is the switch rendering below?</p> */}

            {/* <Switch
              onCheckedChange={handleToggle}
              defaultChecked={showDiagram}
              className="bg-black dark:bg-white"
            /> */}
            <div className="m-2">
              <span className="text-sm text-gray-700">
                {showDiagram ? (
                  <h3 className="flex items-center justify-center text-xl md:text-5xl font-bold text-black dark:text-primary/70 mt-12 md:mt-20">
                    Learning Curve
                  </h3>
                ) : (
                  <h3 className="flex items-center justify-center text-xl md:text-5xl font-bold text-black dark:text-primary/70 md:mt-20 mt-12">
                    Tech Stack
                  </h3>
                )}{" "}
                {/* Debug text */}
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
