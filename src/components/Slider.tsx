import { FC, useEffect, useState } from "react";
import Carousel from "./carousel/Carousel";
import { useTheme } from "./theme/ThemeContext";
import { RevealText } from "./StaggeredText";
import { Switch } from "./ui/switch";

interface SliderProps {
  onToggle: (checked: boolean) => void;
  showDiagram: boolean;
  // onToggleDecorativeTheme: (checked: boolean) => void;
  // decorativeTheme: boolean;
}

const HomePage: FC<SliderProps> = ({
  onToggle,
  showDiagram,
  // onToggleDecorativeTheme,
  // decorativeTheme,
}) => {
  const { theme } = useTheme();

  // Fetch URLs for both themes without cache busting and store them
  const [githubStats, setGithubStats] = useState({
    streakLight: "",
    streakDark: "",
    languageLight: "",
    languageDark: "",
  });

  useEffect(() => {
    const streakDarkThemeImage = `https://streak-stats.demolab.com/?user=aanshuu&background=fecfc5&hide_border=true&stroke=000000`;
    const streakLightThemeImage = `https://streak-stats.demolab.com/?user=aanshuu&theme=highcontrast&hide_border=true&stroke=fecfc5&currStreakNum=fecfc5&sideNums=fecfc5&currStreakLabel=fecfc5&sideLabels=fecfc5`;
    const languageDarkThemeImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=aanshuu&layout=compact&bg_color=00000000&text_color=000000&hide_border=true&title_color=000000`;
    const languageLightThemeImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=aanshuu&layout=compact&bg_color=00000000&text_color=fecfc5&hide_border=true&title_color=fecfc5`;

    // Preload both images once
    const preloadImages = () => {
      const streakDarkImage = new Image();
      const streakLightImage = new Image();
      const languageDarkImage = new Image();
      const languageLightImage = new Image();
      streakDarkImage.src = streakDarkThemeImage;
      streakLightImage.src = streakLightThemeImage;
      languageDarkImage.src = languageDarkThemeImage;
      languageLightImage.src = languageLightThemeImage;

      setGithubStats({
        streakDark: streakDarkThemeImage,
        streakLight: streakLightThemeImage,
        languageDark: languageDarkThemeImage,
        languageLight: languageLightThemeImage,
      });
    };

    preloadImages();
  }, [theme]);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation();
  //   console.log("clicked");
  // };

  const items = [
    <div
      key="1"
      className="h-full w-full flex items-center justify-center bg-primary dark:bg-black"
    >
      <RevealText />
    </div>,
    <div
      key="2"
      className="h-full w-full flex flex-col items-center justify-center bg-primary dark:bg-black"
    >
      {/* Language Stats */}
      <img
        src={
          theme === "dark"
            ? githubStats.languageLight
            : githubStats.languageDark
        }
        alt="Language Stats"
        className="w-full max-w-lg overflow-hidden"
        loading="lazy" // Lazy load for performance
      />
    </div>,
    <div
      key="3"
      className="h-full w-full flex flex-col items-center justify-center bg-primary dark:bg-black"
    >
      {/* GitHub Stats: Switch between preloaded dark and light theme images */}
      <img
        src={
          theme === "dark" ? githubStats.streakLight : githubStats.streakDark
        }
        alt="GitHub Stats"
        className="w-full max-w-md"
        loading="lazy" // Lazy load for performance
      />
    </div>,
    <div
      key="4"
      className="h-full w-full flex items-center justify-center bg-primary dark:bg-black"
    >
      {/* <div> */}
        <h1 className="text-3xl font-bold text-black dark:text-[#fecfc5]">
          More Content
        </h1>
        <div onClick={(e) => e.stopPropagation()} className="ml-2 mt-1">
          <Switch
            onCheckedChange={onToggle}
            defaultChecked={showDiagram}
            className="bg-black dark:bg-white dark:shadow-dark-lg"
          />
        {/* </div> */}
        {/* <div>
          <h1 className="text-3xl font-bold text-black dark:text-[#fecfc5]">
            For Dark Theme
          </h1>
          <div onClick={(e) => e.stopPropagation()} className="p-2">
            <Switch
              onCheckedChange={onToggleDecorativeTheme}
              defaultChecked={decorativeTheme}
              className="bg-black dark:bg-white"
            />
          </div>
        </div> */}
      </div>
    </div>,
  ];

  return (
    <div className="relative h-full w-full overflow-visible">
      <Carousel items={items} />
    </div>
  );
};

export default HomePage;
