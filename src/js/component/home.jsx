import React from "react";

//include images into your bundle
import Principal from "./principal.jsx";
import Menu from "./Menu.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<Menu/>
			<Principal/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
