

import { motion } from "framer-motion";
// import { useState } from "react";

export default function Diagram() {
  // const [hoveredNode, setHoveredNode] = useState<String>("");

  // const lineVariant = {
  //   initial: { pathLength: 0, strokeWidth: 2, stroke: "black" },
  //   animate: (isHovered: boolean) => ({
  //     pathLength: 1,
  //     strokeWidth: isHovered ? 4 : 2, // Thicker lines when hovered
  //     stroke: isHovered ? "#00f5ff" : "black", // Glow color on hover
  //     transition: { duration: 0.5, ease: "easeInOut" },
  //   }),
  // };
  return (
    <div
      className="flex justify-center items-center dark:bg-black mt-20 rounded-lg dark:shadow-dark-lg bg-primary transition-all duration-700 ease-in-out drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      style={{ width: "800px", height: "600px" }}
    >
      <svg
        viewBox="0 70 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        className="border rounded-xl shadow-lg p-5"
        width="800"
        height="600"
      >
        {/* Rectangles for nodes */}
        <motion.rect
          x="50"
          y="50"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          // onHoverStart={() => setHoveredNode("HTML")}
          // onHoverEnd={() => setHoveredNode("")}
        />
        <motion.text
          x="80"
          y="80"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          HTML
        </motion.text>

        <motion.rect
          x="50"
          y="150"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          // onHoverStart={() => setHoveredNode("Javascript")}
          // onHoverEnd={() => setHoveredNode("")}
        />
        <motion.text
          x="60"
          y="180"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          JavaScript
        </motion.text>

        <motion.rect
          x="50"
          y="250"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="80"
          y="280"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          CSS
        </motion.text>

        <motion.rect
          x="300"
          y="150"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          // onHoverStart={() => setHoveredNode("React")}
          // onHoverEnd={() => setHoveredNode("")}
        />
        <motion.text
          x="325"
          y="180"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          React
        </motion.text>

        <motion.rect
          x="300"
          y="250"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="305"
          y="280"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          TailwindCss
        </motion.text>

        <motion.rect
          x="50"
          y="350"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="60"
          y="380"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Typescript
        </motion.text>

        <motion.rect
          x="300"
          y="350"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="330"
          y="380"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Trpc
        </motion.text>

        <motion.rect
          x="50"
          y="450"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="70"
          y="480"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          NodeJs
        </motion.text>

        <motion.rect
          x="300"
          y="450"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="310"
          y="480"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ExpressJs
        </motion.text>

        <motion.rect
          x="50"
          y="550"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="65"
          y="580"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Firebase
        </motion.text>

        <motion.rect
          x="50"
          y="650"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="57"
          y="680"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          PocketBase
        </motion.text>

        <motion.rect
          x="300"
          y="650"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="320"
          y="680"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Docker
        </motion.text>

        <motion.rect
          x="600"
          y="350"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="622"
          y="380"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          NextJS
        </motion.text>

        <motion.rect
          x="800"
          y="350"
          width="100"
          height="50"
          className="stroke-current dark:fill-primary fill-black"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.text
          x="835"
          y="380"
          className="fill-current dark:text-black text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Me
        </motion.text>

        {/* HTML to react */}
        <motion.path
          d="M 150 75 Q 250 100, 300 175" // Cubic Bezier curve
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // variants={lineVariant}
          // custom={hoveredNode === "HTML" || hoveredNode === "React"}
          // initial="initial"
          // animate="animate"
        />

        {/* Javascript to react */}
        <motion.path
          d="M 150 175 L 300 175" // Cubic Bezier curve
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // variants={lineVariant}
          // custom={hoveredNode === "Javascript" || hoveredNode === "React"}
          // initial="initial"
          // animate="animate"
        />
        {/* Css to react */}
        <motion.path
          d="M 150 275 Q 250 250, 300 175"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* css to TailwindCSS */}
        <motion.path
          d="M 150 275 L 300 275" // Cubic Bezier curve
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Typescript to trpc */}
        <motion.path
          d="M 150 375 L 300 375"  // Dotted line path
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          strokeDasharray="5 5"  // Dashed pattern
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // initial={{ opacity: 0, strokeDashoffset:20 }}  // Initially invisible
          // animate={{ opacity: 1, strokeDashoffset:0 }}  // Animate opacity to reveal the line
          // transition={{ duration: 0.5, ease: "easeInOut" }}  // Match transition with solid line
        />

        {/* NodeJs to ExpressJs */}
        <motion.path
          d="M 150 475 L 300 475" // Cubic Bezier curve
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* React to NextJs */}
        <motion.path
          d="M 400 175 Q 500 200, 600 375"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Tailwind to NextJs */}
        <motion.path
          d="M 400 275 Q 500 270, 600 375"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Trpc to NextJs */}
        <motion.path
          d="M 400 375 L 600 375"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* ExpressJs to NextJs */}
        <motion.path
          d="M 400 475 Q 500 470, 600 375"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Firebase to NextJs */}
        <motion.path
          d="M 150 575 Q 450 570, 600 375"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* PocketBase to Docker */}
        <motion.path
          d="M 150 675 L 300 675" // Cubic Bezier curve
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Docker to NextJS */}
        <motion.path
          d="M 400 675 Q 550 550, 600 375"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* NextJS to Me */}
        <motion.path
          d="M 700 375 L 800 375"
          className="stroke-[#000000] dark:stroke-[#FECFC5]"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* <motion.image
          href="../../fonts/github_profile_photo.jpg" // Update this with your image path
          x="100"
          y="100"
          height="100"
          width="100"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        /> */}
      </svg>
    </div>
  );
}
