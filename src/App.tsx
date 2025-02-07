import BottomNav from "./components/BottomNav";

import ProfileBar from "./components/ProfileBar";
import SeedGame from "./components/SeedGame";




const App = () => {

	
	const handleSeedClick = () => {

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



