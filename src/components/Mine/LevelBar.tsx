import { ArrowUpCircleOutline, StatsChartOutline,TrendingUpOutline } from "react-ionicons";

const LevelBar = () => {
	return (
		<div className="w-full flex items-center justify-between">
			<div className="flex items-center gap-2">
				<ArrowUpCircleOutline
					cssClasses={"!text-green-500"}
					width={"32px"}
					height={"32px"}
				/>
				<div className="flex flex-col justify-center">
					<span className="text-[13px] text-[#9fa0a7]">Level up</span>
					<span>0 / 1000 pts</span>
				</div>
			</div>
			<div className="flex items-center gap-2">
		
				<TrendingUpOutline
					cssClasses={"!text-green-500"}
					beat
					height="32px"
					width="32px"
				/>
				<div className="flex flex-col justify-center">
					
					<span className="text-[13px] text-[#9fa0a7]">Level</span>
					<span>Ple seeds</span>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<StatsChartOutline
					cssClasses={"!text-green-500"}
					width={"32px"}
					height={"32px"}
				/>
				<div className="flex flex-col justify-center">
					
					<span className="text-[13px] text-[#9fa0a7]">+23%</span>
					<span>Pollution</span>
				</div>
			</div>
		</div>
	);
};

export default LevelBar;
