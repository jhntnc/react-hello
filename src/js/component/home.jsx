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
			<Menu start="Start Bootstrap"/>
			<Principal welcome="A Warm Welcome!"/>
			<Card image="https://www.nbvplc.com/images/blog/1.jpg"/>
			<Footer footer="© 2022, 4Geeks, PT-32, Chile"/>
		</div>
	);
};

export default Home;
