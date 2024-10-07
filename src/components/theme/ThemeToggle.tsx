// import { useEffect, useState } from "react";
// import { Sun } from "lucide-react";
// import { MoonStar } from "lucide-react";


// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//   }, []);

//   const toggleTheme = async() => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     localStorage.setItem("theme", newTheme); // Stored
//   };
//   return (
//     <button
//       onClick={toggleTheme}
//       className="text-white dark:text-white rounded"
//     >
//       {theme === "light" ? <Sun /> : <MoonStar />}
//     </button>
//   );
// };

// export default ThemeToggle;

import { FC } from "react";
import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "./ThemeContext"; // Adjust the path to where ThemeProvider is located

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="text-white dark:text-white rounded">
      {theme === "light" ? <Sun /> : <MoonStar />}
    </button>
  );
};

export default ThemeToggle;
