import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Principal from "./principal.jsx";
import Menu from "./Menu.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Menu/>
			<Principal/>
		</div>
	);
};

export default Home;
