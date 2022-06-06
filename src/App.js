import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<HomeScreen />
		</BrowserRouter>
	);
};

export default App;
