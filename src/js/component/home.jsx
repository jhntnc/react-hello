import React from "react";

//include images into your bundle
import Principal from "./principal.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Principal/>
			<Footer/>
		</div>
	);
};

export default Home;
