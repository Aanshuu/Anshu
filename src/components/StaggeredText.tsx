import React from "react";
import { motion } from "framer-motion";

export const RevealText = () => {
  return (
    <div className="grid h-screen place-content-center px-8">
      <FlipLink href="#">FRONTEND DEVELOPER</FlipLink>
      <FlipLink href="#">BACKEND DEVELOPER</FlipLink>
      <FlipLink href="#">FOUNDER MODE</FlipLink>
      <FlipLink href="#">FREELANCER</FlipLink>
    </div>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl text-black dark:text-primary font-extrabold"
    >
      <div>
        {children.split("").map((l, i) => {
          return <motion.span key={i} variants={{initial: {y:0},hovered: {y: "-100%"}}} transition={{duration: 0.20, ease: "easeInOut", delay: 0.020 * i}} className="inline-block" >{l === " " ? "\u00A0" : l}</motion.span>;
        })}
      </div>
      <div className="absolute inset-0" >
        {children.split("").map((l, i) => {
          return <motion.span key={i} variants={{initial: {y: "100%"},hovered: {y: 0}}} transition={{duration: 0.20, ease: "easeInOut", delay: 0.020 * i}} className="inline-block">{l === " " ? "\u00A0" : l}</motion.span>;
        })}
      </div>
      {/* <motion.div variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}>
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      >
        {children}
      </motion.div> */}
    </motion.a>
  );
};
