import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MaxWidthWrapper from './common/MaxWidthWrapper';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const generateRandomChar = () => characters[Math.floor(Math.random() * characters.length)];

// Helper to generate random numbers within a range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Length of the character trail
const trailLength = 8; // Shorter trail for less congestion

const MatrixRain = () => {
  const [matrix, setMatrix] = useState<{ id: number; chars: string[]; x: number; delay: number }[]>([]);
  const [maxFallHeight, setMaxFallHeight] = useState<number>(0);

  useEffect(() => {
    // Set initial maxFallHeight and update on window resize
    const updateFallHeight = () => {
      setMaxFallHeight(window.innerHeight * 0.75); // Update maxFallHeight based on window size
    };

    updateFallHeight(); // Set initial value
    window.addEventListener('resize', updateFallHeight);

    const createRainDrop = () => {
      const newDrop = {
        id: Date.now(),
        chars: Array.from({ length: trailLength }, generateRandomChar), // Generate a trail of characters
        x: random(0, window.innerWidth),  // Random horizontal position
        delay: random(0, 1),              // Random delay before falling
      };
      setMatrix(prev => [...prev, newDrop]);

      // Clean up old drops that have finished falling
      setMatrix(prev => prev.filter(drop => drop.id > Date.now() - 8000)); // Keep elements for 8 seconds
    };

    const interval = setInterval(createRainDrop, 300); // Create new drop every 300ms

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateFallHeight);
    };
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {matrix.map((drop) => (
        <div key={drop.id} className="absolute" style={{ left: drop.x }}>
          {drop.chars.map((char, index) => (
            <motion.div
              key={index}
              className='matrix-char text-black dark:text-white'
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: [0.2, 0.8, 0], y: maxFallHeight }} // Ends before the screen's bottom
              transition={{
                duration: random(1.5, 2),  // Faster fall duration
                delay: drop.delay + index * 0.05,  // Create trailing effect by delaying each character
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{
                fontFamily: 'monospace',
                fontSize: '8px',
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
    </MaxWidthWrapper>
    
  );
};

export default MatrixRain;
