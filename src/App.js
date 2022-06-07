import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import DetailScreen from "./components/Profile/DetailScreen";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/detail" element={<DetailScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
