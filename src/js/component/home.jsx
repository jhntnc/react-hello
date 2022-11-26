import React from "react";

//include images into your bundle
import Principal from "./principal.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Principal/>
		</div>
	);
};

export default Home;
