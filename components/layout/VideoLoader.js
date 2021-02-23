import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoLoader = () => {
	const [button, setButton] = useState(false);

	const communityButton = () => {
		setTimeout(() => {
			setButton(true);
		}, 1200000);
	};

	return (
		<>
			<h1 className="text-4xl font-bold text-center text-purple-800">
				Sesión #1
			</h1>
			<h1 className="mt-2 mb-4 text-xl font-bold text-center text-purple-800">
				Tu gran oportunidad de tener pacientes en todo el mundo
			</h1>
			<ReactPlayer
				url="http://youtu.be/2uLODu3-Cpg"
				onStart={() => communityButton()}
			/>

			<div className="my-12">
				{button ? (
					<button className="block px-6 py-4 mx-auto font-bold text-center text-white uppercase bg-pink-600 rounded-full">
						Ir a la comunidad
					</button>
				) : null}
			</div>
		</>
	);
};

export default VideoLoader;
