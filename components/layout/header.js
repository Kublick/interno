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

	const [text, setText] = useState(false);

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

	let mostrarTexto = false;

	useEffect(() => {
		const showButton = () => {
			let d1 = new Date();
			let d2 = new Date("Wed Feb 10 2021 19:10:00");
			if (d1.getTime() >= d2.getTime()) {
				console.log("es true");
				setText(true);
			}
		};

		showButton();
	}, []);

	return (
		<header className="relative py-4 text-white bg-black">
			<div className="grid grid-cols-3">
				<div className="flex justify-center">
					<p>Logo</p>
				</div>
				<div className="flex justify-center space-x-12">
					<div>
						<p className="flex items-center justify-center counter-text">
							{timeLeft.days}
						</p>
						<p className="pt-2 text-center text-white">dias</p>
					</div>
					<div>
						<p className="flex items-center justify-center counter-text">
							{timeLeft.hours}
						</p>
						<p className="pt-2 text-center text-white">horas</p>
					</div>
					<div>
						<p className="flex items-center justify-center counter-text">
							{timeLeft.minutes}
						</p>
						<p className="pt-2 text-center text-white">minutos</p>
					</div>
					<div className="justify-center">
						<p className="flex items-center justify-center counter-text">
							{timeLeft.seconds}
						</p>
						<p className="pt-2 text-center text-white">segundos</p>
					</div>
				</div>
				<div>
					<p className="lg:text-2xl lg:font-bold">Evento Online</p>
				</div>
			</div>

			{/* <div className="flex flex-row space-x-24">
				<p className="flex items-center text-2xl font-bold">
					Nuestra clase comienza en:
				</p>
				<div className="justify-center">
					<p className="flex items-center justify-center counter-text">
						{timeLeft.days}
					</p>
					<p className="pt-2 text-center text-white">dias</p>
				</div>
				<div>
					<p className="flex items-center justify-center counter-text">
						{timeLeft.hours}
					</p>
					<p className="pt-2 text-center text-white">horas</p>
				</div>
				<div>
					<p className="flex items-center justify-center counter-text">
						{timeLeft.minutes}
					</p>
					<p className="pt-2 text-center text-white">minutos</p>
				</div>
				<div className="justify-center">
					<p className="flex items-center justify-center counter-text">
						{timeLeft.seconds}
					</p>
					<p className="pt-2 text-center text-white">segundos</p>
				</div>
			</div>
			<p className="text-2xl font-bold">Evento Online</p> */}
			{text ? <h1 className="text-2xl text-red-700">Texto</h1> : null}
		</header>
	);
};

export default Header;
