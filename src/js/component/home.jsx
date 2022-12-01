import React from "react";

//include images into your bundle
import Principal from "./principal.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Menu/>
			<Principal/>
			<Footer/>
		</div>
	);
};

export default Home;
