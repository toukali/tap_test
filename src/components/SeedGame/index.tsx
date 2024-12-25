/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LevelBar from "./LevelBar";
import StatusBar from "./StatusBar";
interface SeedGameProps {
	onSeedClick: () => void
  }
  
function SeedGame({ onSeedClick }: SeedGameProps) {
	const [seeds, setSeeds] = useState<{ id: number; x: number; y: number; createdAt: number }[]>([])

	useEffect(() => {
		const interval = setInterval(() => {
		  const newSeed = {
			id: Date.now(),
			x: Math.random() * 100,
			y: Math.random() * 100,
			createdAt: Date.now(), // timestamp for when the seed was created
		  };
		  setSeeds(prev => {
			// Remove seeds that are older than 5 seconds
			return prev.filter(seed => Date.now() - seed.createdAt < 6000).concat(newSeed);
		  });
		}, 1000); // Create a new seed every second for demo purposes
	
		return () => clearInterval(interval);
	  }, []);
  
	return (
	  <div>
		<LevelBar />
		<StatusBar />

		<div className="relative h-96 bg-[#1a2F1C]/30 rounded-xl ">
      {seeds.map((seed) => (
		
        <motion.button
          key={seed.id}
		  style={{ left: `${seed.x}%`, top: `${seed.y}%` }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          onClick={() => {
            onSeedClick();
            setSeeds(prev => prev.filter(s => s.id !== seed.id)); // Remove the clicked seed from the state
          }}
        >
          <svg
            viewBox="0 0 12 12"
            className="w-full h-full text-[#4CAF50]"
            fill="currentColor"
          >
            <path
              d="M6.05 4.14l-.39-.39a2 2 0 0 0-2.83 0l-.17.17c-.78.78-.78 2.05 0 2.83l1.24 1.24-.07.08c-3.83 4.24-3.83 10.8 0 15.04l.07.08-1.24 1.24c-.78.78-.78 2.05 0 2.83l.17.17c.78.78 2.05.78 2.83 0L8.95 25l.39.39c.78.78 2.05.78 2.83 0l.17-.17c.78-.78.78-2.05 0-2.83l-1.24-1.24.07-.08c3.83-4.24 3.83-10.8 0-15.04l-.07-.08 1.24-1.24c.78-.78.78-2.05 0-2.83l-.17-.17c-.78-.78-2.05-.78-2.83 0L6.05 4.14zM12 21.19C8.24 21.19 5.19 18.14 5.19 14.38c0-3.76 3.05-6.81 6.81-6.81s6.81 3.05 6.81 6.81c0 3.76-3.05 6.81-6.81 6.81z"
              transform={`translate(${seed.x}, ${seed.y})`} // Apply translation to path
            />
          </svg>
        </motion.button>
      ))}

		</div>
	  </div>
	)
  }

export default SeedGame;
