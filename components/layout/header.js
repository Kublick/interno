import React, { useEffect } from "react";
import {
	differenceInCalendarDays,
	startOfTomorrow,
	differenceInMinutes,
	differenceInHours,
} from "date-fns";

const Header = () => {
	let today = new Date();
	let endDate = new Date("March 1, 2021");
	let days = differenceInCalendarDays(endDate, today);
	let hours = differenceInHours(startOfTomorrow(today), today);
	let minutes = 60 - new Date().getMinutes();
	let seconds = 60 - new Date().getSeconds();

	return (
		<header className="flex justify-around py-4 text-white bg-black">
			<p>Logo</p>
			<div>
				<p className="p-4 text-center bg-blue-700 rounded-xl ">{days}</p>
				<p className="text-center text-white">dias</p>
			</div>
			<div>
				<p className="p-4 text-center bg-blue-700 rounded-xl ">{hours}</p>
				<p className="text-center text-white">horas</p>
			</div>
			<div>
				<p className="p-4 text-center bg-blue-700 rounded-xl ">{minutes}</p>
				<p className="text-center text-white">minutos</p>
			</div>
			<div>
				<p className="p-4 text-center bg-blue-700 rounded-xl ">{seconds}</p>
				<p className="text-center text-white">segundos</p>
			</div>
			<p>Texto</p>
		</header>
	);
};

export default Header;
