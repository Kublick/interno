import Head from "next/head";
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
		</>
	);
};

export default Index;
