import BottomNav from "./components/BottomNav";
import Mine from "./components/Mine";
import ProfileBar from "./components/ProfileBar";
import SeedGame from "./components/SeedGame";
import { useState } from 'react';
import { motion } from 'framer-motion';


const App = () => {
	const [points, setPoints] = useState(100390)
	const [hourlyRate, setHourlyRate] = useState(200)
	
	const handleSeedClick = () => {
	  setPoints(prev => prev + 10)
	  setHourlyRate(prev => prev + 1)
	}
	return (
		<div className="xl:w-[30%] lg:w-[50%] md:w-[70%] w-full h-screen bg-gradient-to-t from-[#0b0c0e] to-[#00446d] flex flex-col justify-between my-0 mx-auto px-5 py-3">
			<ProfileBar />
			<div className="w-full h-full">


			<SeedGame onSeedClick={handleSeedClick} />

	
	
			</div>
		
	
			<BottomNav />
			
		</div>
	);
};

export default App;



