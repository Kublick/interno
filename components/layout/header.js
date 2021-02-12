import React, { useEffect, useState } from "react";

const Header = () => {
	const calculateTimeLeft = () => {
		let year = new Date("February 22, 2021 18:00");
		const difference = +new Date(`${year}-10-1`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [year] = useState(new Date().getFullYear());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});

	return (
		<header>
			<div className="py-4 bg-black border-b-4 border-purple-500">
				<div className="flex flex-col items-center justify-around md:flex-row">
					<div className="text-white">Logo</div>
					<div>
						<p className="py-4 text-2xl font-bold text-white">
							La proxima Clase sera en...
						</p>
					</div>
					<div className="flex flex-row w-1/3 justify-evenly">
						<div className="flex flex-col items-center">
							<p className="flex items-center justify-center justify-centerflex counter-text">
								{timeLeft.days}
							</p>
							<p className="text-white">dias</p>
						</div>

						<div className="flex flex-col items-center">
							<p className="flex items-center justify-center counter-text">
								{timeLeft.hours}
							</p>
							<p className="text-white">horas</p>
						</div>

						<div className="flex flex-col items-center">
							<p className="flex items-center justify-center counter-text">
								{timeLeft.minutes}
							</p>
							<p className="text-white">minutos</p>
						</div>

						<div className="flex flex-col items-center">
							<p className="flex items-center justify-center counter-text">
								{timeLeft.seconds}
							</p>
							<p className="text-white">segundos</p>
						</div>
					</div>
					<div>
						<p className="hidden text-2xl font-bold text-white md:block">
							Clase Totalmente Gratis
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
