import React from "react";
import Image from "next/image";

const Cards = () => {
	return (
		<>
			<div className="flex items-center justify-center">
				<div className="flex-shrink-0 m-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg max-w-l animate">
					<h1 className="flex justify-center pt-4 text-2xl font-bold text-white animate-pulse">
						Ahora Disponible !!
					</h1>
					<div className="relative flex items-center justify-center p-10 px-10">
						<Image
							src={"/images/sesion1.png"}
							width={256}
							height={144}
							className="rounded-lg"
						/>
					</div>

					<div className="relative px-6 pb-6 mt-6 text-white">
						<span className="block mb-2 text-xl font-bold">Sesión #1</span>
						<div className="flex justify-between">
							<span className="block w-64 text-lg font-semibold text-center">
								Tu gran oportunidad de tener a tus pacientes en todo el mundo
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Sesion 2 */}

			<div className="flex flex-wrap items-center justify-center opacity-60">
				<div className="relative flex-shrink-0 m-6 overflow-hidden bg-pink-300 rounded-lg shadow-lg max-w-l">
					<div className="relative flex items-center justify-center p-10 px-10">
						<Image src={"/images/sesion2.png"} width={256} height={144} />
					</div>

					<div className="relative px-6 pb-6 mt-6 text-white">
						<span className="block mb-2 text-xl font-bold">Sesión #2</span>
						<div className="flex justify-between">
							<span className="block w-64 text-lg font-semibold text-center">
								7 formas de tener dinero 100% online y los 5 errores de novato
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Sesion 3 */}

			<div className="flex flex-wrap items-center justify-center opacity-60">
				<div className="relative flex-shrink-0 m-6 overflow-hidden bg-pink-300 rounded-lg shadow-lg max-w-l">
					<div className="relative flex items-center justify-center p-10 px-10">
						<Image src={"/images/sesion3.png"} width={256} height={144} />
					</div>

					<div className="relative px-6 pb-6 mt-6 text-white">
						<span className="block mb-2 text-xl font-bold">Sesión #3</span>
						<div className="flex justify-between">
							<span className="block w-64 text-lg font-semibold text-center">
								Consigue tus primeros pacientes online con la estrategia
								D.E.P.E.
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Sesion 4 */}

			<div className="flex flex-wrap items-center justify-center opacity-60">
				<div className="relative flex-shrink-0 m-6 overflow-hidden bg-pink-300 rounded-lg shadow-lg max-w-l">
					<div className="relative flex items-center justify-center p-10 px-10">
						<Image src={"/images/sesion4.png"} width={256} height={144} />
					</div>

					<div className="relative px-6 pb-6 mt-6 text-white">
						<span className="block mb-2 text-xl font-bold">Sesión #4</span>
						<div className="flex justify-between">
							<span className="block w-64 text-lg font-semibold text-center">
								Vence tu inseguridad y tus miedos tu siguietne paso para vivir
								de tus consultas
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
