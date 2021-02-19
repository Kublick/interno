import React from "react";
import ReactPlayer from "react-player";

const VideoLoader = () => {
	return (
		<>
			<h1 className="text-2xl font-bold text-center text-purple-800">
				Sesión #1
			</h1>
			<h1 className="mb-8 text-xl text-center text-purple-800">
				Tu gran oportunidad de tener pacientes en todo el mundo
			</h1>
			<ReactPlayer url="https://youtu.be/2uLODu3-Cpg" />
		</>
	);
};

export default VideoLoader;
