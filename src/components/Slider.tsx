import { FC, useEffect, useState } from "react";
import Carousel from "./carousel/Carousel";
import { useTheme } from "./theme/ThemeContext";
import { RevealText } from "./StaggeredText";

const HomePage: FC = () => {
  const { theme } = useTheme();

  // Fetch URLs for both themes without cache busting and store them
  const [githubStats, setGithubStats] = useState({
    streakLight: '',
    streakDark: '',
    languageLight: '',
    languageDark: '',
  });

  useEffect(() => {
    const streakDarkThemeImage = `https://streak-stats.demolab.com/?user=aanshuu&theme=default&hide_border=true`;
    const streakLightThemeImage = `https://streak-stats.demolab.com/?user=aanshuu&theme=highcontrast&hide_border=true`;
    const languageDarkThemeImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=aanshuu&layout=compact&bg_color=00000000&text_color=000000&hide_border=true`
    const languageLightThemeImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=aanshuu&layout=compact&bg_color=00000000&text_color=ffffff&hide_border=true`

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

  const items = [
    <div key="1" className="h-full w-full flex items-center justify-center bg-black dark:bg-white">
      <RevealText/>
    </div>,
    <div key="2" className="h-full w-full flex flex-col items-center justify-center bg-black dark:bg-white">
      {/* Language Stats */}
      <img
        src={theme === "dark" ? githubStats.languageDark : githubStats.languageLight}
        alt="Language Stats"
        className="w-full max-w-lg overflow-hidden"
        loading="lazy" // Lazy load for performance
      />
    </div>,
    <div key="3" className="h-full w-full flex flex-col items-center justify-center bg-black dark:bg-white">
      {/* GitHub Stats: Switch between preloaded dark and light theme images */}
      <img
        src={theme === "dark" ? githubStats.streakDark : githubStats.streakLight}
        alt="GitHub Stats"
        className="w-full max-w-md"
        loading="lazy" // Lazy load for performance
      />
    </div>,
    <div key="4" className="h-full w-full flex items-center justify-center bg-black dark:bg-white">
      <h1 className="text-3xl font-bold text-black">More Content</h1>
    </div>,
  ];

  return (
    <div className="relative h-full w-full overflow-visible">
      <Carousel items={items} />
    </div>
  );
};

export default HomePage;