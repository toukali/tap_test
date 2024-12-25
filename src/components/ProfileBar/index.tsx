import { LogoYoutube, Rocket } from "react-ionicons";

const ProfileBar = () => {
	return (
		<div className="w-full flex flex-col gap-3">
			<div className="w-full flex items-center justify-center gap-3">

				<div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center justify-center gap-3 px-3 cursor-pointer">
					<Rocket cssClasses={"!fill-[#fdb224]"} />
					<span className="font-semibold whitespace-nowrap">Boost</span>
				</div>
	
			</div>
			<div className="w-full rounded-xl bg-[#012237] h-[60px] flex items-center justify-center gap-3 cursor-pointer">
				<LogoYoutube
					cssClasses={"!fill-[#ff0000]"}
					width="32px"
					height="32px"
				/>
				<span className="font-semibold whitespace-nowrap">Watch to earn</span>
			</div>
		</div>
	);
};

export default ProfileBar;
