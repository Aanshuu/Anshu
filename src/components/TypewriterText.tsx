import { motion, Variants } from "framer-motion";
import splitStringUsingRegex from "@/lib/splitStringUsingRegex";

const TypewriterText = () => {
  const Heading = "Hello, I am Anshu 👋";
  const Description =
    "I hate css and frontend development, and this site was a nightmare for me but still did it and will continue building projects, since I love to build. All my projects are like seeds for me. With proper care, time and effort you raise a tree. 🌱";
  const descriptionChars = splitStringUsingRegex(Description);
  const headingChars = splitStringUsingRegex(Heading);

  const charVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handWaveAnimation: Variants = {
    hidden: { opacity: 0, rotate: 0 }, 
    visible: {
      opacity: 1, // Show the emoji initially
      rotate: [0, 10, -10, 10, -10, 0], 
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5, // Smooth waving effect
          ease: "easeInOut",
        },
        opacity: { duration: 0.2 }, // Fade in only once at the beginning
      },
    },
  };

  return (
    <div className="flex flex-col justify-center z-10">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.05 }}
        className="text-2xl md:text-4xl font-bold text-black dark:text-[#FECFC5] z-20 mb-4"
      >
        {headingChars.map((char, index) => (
          <motion.span
            key={index}
            variants={char === "👋" ? handWaveAnimation : charVariants}
            style={char === "👋" ? { display: "inline-block", transformOrigin: "bottom center" } : {}}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.01 }}
        className="text-sm md:text-md font-bold text-black dark:text-[#FECFC5] z-20"
      >
        {descriptionChars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            transition={{ duration: 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default TypewriterText;
