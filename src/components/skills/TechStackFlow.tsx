import React, { useState, useEffect } from "react";
import {
  Handle,
  Position,
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa"; // Import icons from react-icons
import { SiTypescript } from "react-icons/si";
import { GiTechnoHeart } from "react-icons/gi";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiFramer, SiPocketbase } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { useTheme } from "../theme/ThemeContext";

interface IconNodeProps {
  data: {
    label: string;
    icon: JSX.Element;
  };
}

// Define the custom node component with hidden Handles
const CustomNode: React.FC<IconNodeProps> = ({ data }) => {
  return (
    <div className="dark:bg-primary bg-black rounded-lg shadow-md p-4 flex flex-col items-center border border-gray-300">
      {/* Add specific IDs to the target handles */}
      <Handle
        type="target"
        position={Position.Top}
        id="top-left"
        style={{ left: "25%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top-middle"
        style={{ left: "50%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top-right"
        style={{ left: "75%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-top"
        style={{ top: "25%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-middle"
        style={{ top: "50%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-bottom"
        style={{ top: "75%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-left"
        style={{ left: "25%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-middle"
        style={{ left: "50%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-right"
        style={{ left: "75%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-top"
        style={{ right: "25%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-middle"
        style={{ right: "50%", visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-end"
        style={{ right: "75%", visibility: "hidden" }}
      />
      {/* Default bottom source handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        style={{ visibility: "hidden" }}
      />
      {data.icon} {/* This will render the icon */}
      <p className="text-gray-700 text-lg font-semibold">{data.label}</p>
    </div>
  );
};

// Define nodes with icons
const initialNodes = [
  {
    id: "1",
    data: {
      label: "Tech Stack",
      icon: <GiTechnoHeart size={40} className="text-white dark:text-black"/>,
    }, // TypeScript Icon
    position: { x: 350, y: 275 },
    type: "customNode", // Specify custom
  },
  {
    id: "2",
    data: { label: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> }, // Node.js Icon
    position: { x: 250, y: 50 }, // Adjust the position for better spacing
    type: "customNode", // Specify custom node type
  },
  {
    id: "3",
    data: {
      label: "TypeScript",
      icon: <SiTypescript size={40} color="#007acc" />,
    }, // TypeScript Icon
    position: { x: 450, y: 50 },
    type: "customNode", // Specify custom
  },
  {
    id: "4",
    data: { label: "React", icon: <FaReact size={40} color="#61dafb" /> }, // React Icon
    position: { x: 50, y: 50 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "5",
    data: { label: "CSS", icon: <FaCss3Alt size={40} color="#61dafb" /> }, // React Icon
    position: { x: 50, y: 200 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "6",
    data: {
      label: "JavaScript",
      icon: <IoLogoJavascript size={40} color="#ffde21" />,
    }, // React Icon
    position: { x: 50, y: 350 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "7",
    data: { label: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> }, // React Icon
    position: { x: 50, y: 500 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "8",
    data: { label: "Framer", icon: <SiFramer size={40} className="text-white dark:text-black" /> }, // React Icon
    position: { x: 250, y: 500 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "9",
    data: {
      label: "TailwindCSS",
      icon: <RiTailwindCssFill size={40} color="#61dafb" />,
    }, // React Icon
    position: { x: 450, y: 500 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "10",
    data: { label: "Git", icon: <FaGitAlt size={40} className="text-white dark:text-black" /> }, // React Icon
    position: { x: 650, y: 500 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "11",
    data: { label: "NextJs", icon: <RiNextjsFill size={40} className="text-white dark:text-black" /> }, // React Icon
    position: { x: 650, y: 50 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "12",
    data: {
      label: "PocketBase",
      icon: <SiPocketbase size={40} className="text-white dark:text-black" />,
    }, // React Icon
    position: { x: 650, y: 200 },
    type: "customNode", // Specify custom node type
  },
  {
    id: "13",
    data: {
      label: "FireBase",
      icon: <IoLogoFirebase size={40} className="text-white dark:text-black" />,
    }, // React Icon
    position: { x: 650, y: 350 },
    type: "customNode", // Specify custom node type
  },
];

// Define a static edge

// Register custom node type
const nodeTypes = { customNode: CustomNode };

function Flow() {
  const [nodes] = useNodesState(initialNodes); // Static nodes
  const { theme } = useTheme();
  const [edges, setEdges] = useState<any>([]);

  useEffect(() => {
    const updatedEdges = [
      {
        id: "e2-1",
        source: "2",
        target: "1",
        targetHandle: "top-middle", // Connect to the middle handle of the Tech Stack node
        sourceHandle: "bottom", // Connect to the bottom handle of the React node
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e3-1",
        source: "3",
        target: "1",
        targetHandle: "top-right", // Connect to the right handle of the Tech Stack node
        sourceHandle: "bottom", // Connect to the bottom handle of the React node
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e4-1",
        source: "4",
        target: "1",
        targetHandle: "top-left", // Connect to the left handle of the Tech Stack node
        sourceHandle: "bottom", // Connect to the bottom handle of the React node
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e5-1",
        source: "5",
        target: "1",
        targetHandle: "left-top",
        sourceHandle: "right",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e6-1",
        source: "6",
        target: "1",
        targetHandle: "left-middle",
        sourceHandle: "right",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e7-1",
        source: "7",
        target: "1",
        targetHandle: "left-bottom",
        sourceHandle: "right",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e8-1",
        source: "8",
        target: "1",
        targetHandle: "bottom-left",
        sourceHandle: "top",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e9-1",
        source: "9",
        target: "1",
        targetHandle: "bottom-middle",
        sourceHandle: "top",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e10-1",
        source: "10",
        target: "1",
        targetHandle: "bottom-right",
        sourceHandle: "top",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e11-1",
        source: "11",
        target: "1",
        targetHandle: "right-middle",
        sourceHandle: "left",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e12-1",
        source: "12",
        target: "1",
        targetHandle: "right-top",
        sourceHandle: "left",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
      {
        id: "e13-1",
        source: "13",
        target: "1",
        targetHandle: "right-end",
        sourceHandle: "left",
        type: "default",
        animated: true,
        style: {
          stroke: theme === "light" ? "#000000" : "#FECFC5", // Apply conditional stroke color based on theme
          strokeWidth: 2,
        },
      },
    ];
    setEdges(updatedEdges);
  }, [theme]);

  // const [edges] = useEdgesState(initialEdges); // Static edges

  return (
    <div className="flex items-center justify-center flow-container h-[50vh] w-[50vw] rounded-3xl dark:bg-black dark:shadow-dark-lg bg-primary drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)] mt-20">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes} // Use custom node type
        fitView
        panOnDrag={false} // Disable drag
        zoomOnScroll={false} // Disable zoom
        attributionPosition="bottom-right" // Position can be set, but we'll hide it with CSS // Hide React Flow tag
      ></ReactFlow>
    </div>
  );
}

export default Flow;
