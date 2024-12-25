import { CalendarOutline, LogoBitcoin, People } from "react-ionicons";

const StatusBar = () => {
	return (
		<div className="w-full flex items-center justify-center gap-3">
			<div className="w-full rounded-xl bg-[#012237] py-[6px] flex items-center gap-3 px-3 cursor-pointer">
				<People cssClasses={"animate-pulse !fill-[#fdb224]"} />
				<div className="flex flex-col justify-center">
					<span className="text-[13px] text-[#9fa0a7] whitespace-nowrap">Total seeds</span>
					<span>1,000 B</span>
				</div>
			</div>
			<div className="w-full rounded-xl bg-[#012237] py-[6px] flex items-center justify-center gap-3 px-3 cursor-pointer">
				<LogoBitcoin cssClasses={"!fill-[#fdb224]"} />
				<div className="flex flex-col justify-center">
					<span className="text-[13px] text-[#9fa0a7] whitespace-nowrap">Collected</span>
					<span>300 B</span>
				</div>
			</div>
			<div className="w-full rounded-xl bg-[#012237] py-[6px] flex items-center justify-center gap-3 px-3 cursor-pointer">
				<CalendarOutline cssClasses={"!fill-[#fdb224] !text-[#fdb224]"} />
				<div className="flex flex-col justify-center">
					<span className="text-[13px] text-[#9fa0a7] whitespace-nowrap">Next stage</span>
					<span>100 Days</span>
				</div>
			</div>
		</div>
	);
};

export default StatusBar;
