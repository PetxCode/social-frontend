import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfirmEmailVerification from "./components/Auth/ConfirmEmailVerification";
import NewPassword from "./components/Auth/NewPassword";
import PrivatePage from "./components/Auth/PrivatePage";
import Register from "./components/Auth/Register";
import ResetPassword from "./components/Auth/ResetPassword";
import SignIn from "./components/Auth/Signin";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import MakePost from "./components/Post/MakePost";
import DetailScreen from "./components/Profile/DetailScreen";
import UpdateProfile from "./components/Profile/EditProfile";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<PrivatePage>
							<HomeScreen />
						</PrivatePage>
					}
				/>

				<Route
					path="/post"
					element={
						<PrivatePage>
							<MakePost />
						</PrivatePage>
					}
				/>

				<Route
					path="/update/:id"
					element={
						<PrivatePage>
							<UpdateProfile />
						</PrivatePage>
					}
				/>

				<Route
					path="/detail/:id"
					element={
						<PrivatePage>
							<DetailScreen />
						</PrivatePage>
					}
				/>

				<Route path="/register" element={<Register />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/requestReset" element={<ResetPassword />} />
				<Route path="/api/user/reset/:id/:token" element={<NewPassword />} />
				<Route
					path="/api/user/token/:id/:token"
					element={<ConfirmEmailVerification />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
