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
		<header className="py-4 text-white bg-black border-b-4 border-pink-500">
			<div className="text-2xl font-bold text-center md:hidden">
				<p>La clase 1 comienza en.. </p>
			</div>
			<div className="flex items-center justify-center">
				<div className="flex items-center space-x-6 font-bold lg:space-x-12 sm:justify-center">
					<div className="hidden px-4 text-2xl md:flex">
						<p>La clase 1 comienza en... </p>
					</div>
					<div className="flex flex-col items-center">
						<p className="flex items-center justify-center counter-text">
							{timeLeft.days}
						</p>
						<p className="counter-label">dias</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="flex items-center justify-center counter-text">
							{timeLeft.hours}
						</p>
						<p className="counter-label">horas</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="flex items-center justify-center counter-text">
							{timeLeft.minutes}
						</p>
						<p className="counter-label">minutos</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="flex items-center justify-center counter-text">
							{timeLeft.seconds}
						</p>
						<p className="counter-label">segundos</p>
					</div>
					<div className="items-center hidden text-2xl md:flex">
						<p>Evento Online Gratuito</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
