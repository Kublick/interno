import React, { useState } from "react";
import Fbook from "../components/fbcomments";
import Cards from "../components/layout/Cards";
import Header from "../components/layout/header";
import VideoLoader from "../components/layout/VideoLoader";
import ReactPlayer from "react-player";
import SvgComponent from "../components/utils/svg";
import Fb from "../components/utils/Fb";

const Index = () => {
	return (
		<>
			<Header />
			<div className="flex flex-wrap items-center justify-center lg:mt-12 ">
				<Cards />
			</div>
			<div className="flex flex-col items-center justify-center mt-4">
				<VideoLoader />
			</div>

			<div className="container mx-auto lg:grid lg:grid-cols-2">
				<div>
					<h1 className="my-8 text-3xl font-bold text-center">
						Cuéntanos dos cosas muy importantes para que podamos ayudarte:
					</h1>
					<div className="container w-2/3 pl-8 mx-auto border-l-4 border-purple-600">
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

					<div className="flex flex-col w-2/3 mx-auto">
						<div>
							<Fbook />
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center my-8">
					<h1 className="mb-8 text-xl font-bold">Unete a la comunidad</h1>

					<div className="flex align-middle">
						<a
							href="https://chat.whatsapp.com/BspYI1xBIWlJvnuqIERaTf/"
							target="_blank"
						>
							<SvgComponent />
						</a>
						<a
							className="focus:outline-none"
							href="https://www.facebook.com/groups/2375070212786505/"
							target="_blank"
						>
							<Fb />
						</a>
					</div>

					<div className="py-8"></div>
					<ReactPlayer
						url="https://youtu.be/iGA3w0YVac8"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/c1XGvy-ynZs"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/NmL3jxP9BB0"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/6_MBqp7E3Zw"
						width={320}
						height={320}
					/>
					<ReactPlayer
						url="https://youtu.be/6_MBqp7E3Zw"
						width={320}
						height={320}
					/>
					<div className="py-8">
						<ReactPlayer
							url="https://youtu.be/gpXgrVIJrms"
							width={320}
							height={320}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
