import React, { useState } from "react";
import Fbook from "../components/fbcomments";
import Cards from "../components/layout/Cards";
import Header from "../components/layout/header";
import VideoLoader from "../components/layout/VideoLoader";

const Index = () => {
	return (
		<>
			<Header />
			<div className="flex flex-wrap items-center justify-center lg:mt-12 ">
				<Cards />
			</div>
			<div className="flex flex-col items-center justify-center mt-12">
				<VideoLoader />
			</div>

			<div className="container mx-auto lg:grid lg:grid-cols-2">
				<div>
					<h1 className="my-8 text-3xl font-bold text-center">
						Cuéntanos dos cosas muy importantes para que podamos ayudarte:
					</h1>
					<div className="container w-1/2 pl-8 mx-auto border-l-4 border-purple-600">
						<div className="pt-8 text-left">
							<li className="py-4 list-decimal">
								¿Qué significaría para ti facturar 5 cifras al año trabajando
								online desde tu casa o desde cualquier lugar del mundo en algo
								que te apasiona?
							</li>
							<li className="py-4 list-decimal">
								¿Por qué te gustaría conseguirlo ahora y no dentro de 1, 2, o 3
								años?
							</li>
						</div>
						<p className="pb-8 mb-8 text-center">
							!Nos vemos en los comentarios!
						</p>
					</div>

					<div className="flex flex-col w-1/2 mx-auto">
						<div>
							<Fbook />
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<button className="block px-8 py-2 mb-4 bg-green-600 rounded-full">
						Whatsapp
					</button>
					<button className="block px-8 py-2 mb-4 bg-blue-600 rounded-full">
						Facebook
					</button>
					<button className="block px-8 py-2 mb-4 bg-pink-600 rounded-full">
						Te perdiste un desafio
					</button>
					<h1>Testimonios Videos</h1>
				</div>
			</div>
		</>
	);
};

export default Index;
