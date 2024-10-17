// import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';
// import { motion } from 'framer-motion';
// import ReactDOM from 'react-dom';

// interface NodeData {
//   id: string;
//   x: number; // Ensure x is defined
//   y: number; // Ensure y is defined
//   fx?: number | null;
//   fy?: number | null;
// }

// interface LinkData {
//   source: string | NodeData;
//   target: string | NodeData;
//   value: number;
// }

// interface TransactionGraphProps {
//   data: {
//     nodes: NodeData[];
//     links: LinkData[];
//   };
// }

// const TransactionGraph: React.FC<TransactionGraphProps> = ({ data = { nodes: [], links: [] } }) => {
//   const svgRef = useRef<SVGSVGElement | null>(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current)
//       .attr('width', 600)
//       .attr('height', 400);

//     const width = 600;
//     const height = 400;

//     svg.selectAll('*').remove();

//     const simulation = d3.forceSimulation<NodeData>(data.nodes)
//       .force('link', d3.forceLink<NodeData, LinkData>(data.links).id(d => d.id).distance(100))
//       .force('charge', d3.forceManyBody().strength(-200))
//       .force('center', d3.forceCenter(width / 2, height / 2));

//     // Draw the links (edges)
//     const link = svg.append('g')
//       .selectAll('line')
//       .data(data.links)
//       .enter()
//       .append(() => document.createElementNS('http://www.w3.org/2000/svg', 'line'))
//       .attr('stroke-width', d => Math.sqrt(d.value))
//       .attr('stroke', '#999');

//     // Draw the nodes (wallets)
//     const node = svg.append('g')
//       .selectAll('circle')
//       .data(data.nodes)
//       .enter()
//       .append('circle')
//       .attr('r', 20)
//       .attr('fill', 'steelblue')
//       .call(d3.drag<SVGCircleElement, NodeData>()
//         .on('start', dragStarted)
//         .on('drag', dragged)
//         .on('end', dragEnded));

//     // Add text inside the nodes
//     const text = svg.append('g')
//       .selectAll('text')
//       .data(data.nodes)
//       .enter()
//       .append('text')
//       .text(d => d.id)
//       .attr('font-size', '12px')
//       .attr('fill', '#fff')
//       .attr('text-anchor', 'middle')
//       .attr('alignment-baseline', 'central');

//     simulation.on('tick', () => {
//       link
//         .attr('x1', d => (d.source as NodeData).x)
//         .attr('y1', d => (d.source as NodeData).y)
//         .attr('x2', d => (d.target as NodeData).x)
//         .attr('y2', d => (d.target as NodeData).y);

//       node
//         .attr('cx', d => d.x)
//         .attr('cy', d => d.y);

//       text
//         .attr('x', d => d.x)
//         .attr('y', d => d.y);
//     });

//     function dragStarted(event: d3.D3DragEvent<SVGCircleElement, NodeData, unknown>, d: NodeData) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x; // Store original x
//       d.fy = d.y; // Store original y
//     }

//     function dragged(event: d3.D3DragEvent<SVGCircleElement, NodeData, unknown>, d: NodeData) {
//       d.fx = event.x; // Update position while dragging
//       d.fy = event.y;
//     }

//     function dragEnded(event: d3.D3DragEvent<SVGCircleElement, NodeData, unknown>, d: NodeData) {
//       if (!event.active) simulation.alphaTarget(0);
//       // Reset fixed positions to null so they can be affected by forces
//       d.fx = null;
//       d.fy = null;
//       // Return to the original position
//       d.x = d.fx || d.x; // Ensure x goes back to original
//       d.y = d.fy || d.y; // Ensure y goes back to original
//     }
//   }, [data]);

//   return (
//     <div>
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// }

// export default TransactionGraph;

import { motion } from "framer-motion";
import { useState } from "react";

export default function Diagram() {
  const [hoveredNode, setHoveredNode] = useState<String>("");

  const lineVariant = {
    initial: { pathLength: 0, strokeWidth: 2, stroke: "black" },
    animate: (isHovered: boolean) => ({
      pathLength: 1,
      strokeWidth: isHovered ? 4 : 2, // Thicker lines when hovered
      stroke: isHovered ? "#00f5ff" : "black", // Glow color on hover
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };
  return (
    <div
      className="flex justify-center items-center bg-gray-100 mt-20 rounded-lg"
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
          className="stroke-current text-black fill-white"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => setHoveredNode("HTML")}
          onHoverEnd={() => setHoveredNode("")}
        />
        <motion.text
          x="80"
          y="80"
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
          rx="10" // Add this for horizontal rounding
          ry="10" // Add this for vertical rounding
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onHoverStart={() => setHoveredNode("React")}
          onHoverEnd={() => setHoveredNode("")}
        />
        <motion.text
          x="325"
          y="180"
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
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
          className="stroke-current text-black fill-white"
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
          className="fill-current text-black"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Me
        </motion.text>

        {/* HTML to react */}
        <motion.path
          d="M 150 75 Q 250 100, 300 175" // Cubic Bezier curve
          stroke="black"
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
          stroke="black"
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
          stroke="black"
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
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Typescript to trpc */}
        <motion.path
          d="M 150 375 L 300 375"  // Dotted line path
          stroke="black"
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
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* React to NextJs */}
        <motion.path
          d="M 400 175 Q 500 200, 600 375"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Tailwind to NextJs */}
        <motion.path
          d="M 400 275 Q 500 270, 600 375"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Trpc to NextJs */}
        <motion.path
          d="M 400 375 L 600 375"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* ExpressJs to NextJs */}
        <motion.path
          d="M 400 475 Q 500 470, 600 375"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Firebase to NextJs */}
        <motion.path
          d="M 150 575 Q 450 570, 600 375"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* PocketBase to Docker */}
        <motion.path
          d="M 150 675 L 300 675" // Cubic Bezier curve
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Docker to NextJS */}
        <motion.path
          d="M 400 675 Q 550 550, 600 375"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* NextJS to Me */}
        <motion.path
          d="M 700 375 L 800 375"
          stroke="black"
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
