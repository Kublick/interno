import { useEffect } from "react";

const CommentsFacebook = (props) => {
	console.log("render CommentsFacebook");
	useEffect(() => {
		console.log("load facebook script");
		const facebookScript = document.createElement("script");
		facebookScript.async = true;
		facebookScript.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=241143927734259&autoLogAppEvents=1`;
		document.body.appendChild(facebookScript);
	}, []);

	return (
		<div>
			<div id="fb-root"></div>
			<div
				className="fb-comments"
				data-href="https://www.begoba.com/interno"
				data-numposts="10"
				data-width="100%"
			></div>
		</div>
	);
};

export default CommentsFacebook;
