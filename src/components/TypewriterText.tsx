import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import splitStringUsingRegex from "@/lib/splitStringUsingRegex";

const TypewriterText = () => {
  const Heading = "Hello, I am Anshu 👋";
  const Description = "I hate css and frontend development, and this site was a nightmare for me but still did it and will continue building projects, since i love to build. All my projects are like seeds for me. With proper care, time and effort you raise a tree. 🌱";  
  const descriptionChars = splitStringUsingRegex(Description);
  const headingChars = splitStringUsingRegex(Heading);

  const charVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col justify-center">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.05 }}
        className="text-4xl font-bold text-black dark:text-[#FECFC5] z-20 mb-4"
      >
        {headingChars.map((char) => (
          <motion.span
            key={char}
            variants={charVariants}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.05 }}
        className="text-md font-bold text-black dark:text-[#FECFC5] z-20"
      >
        {descriptionChars.map((char) => (
          <motion.span
            key={char}
            variants={charVariants}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default TypewriterText;