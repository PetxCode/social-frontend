import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateAuth = ({ children }) => {
	const auth = useSelector((state) => state.signIn);
	return !auth ? children : <Navigate to="/" />;
};

export default PrivateAuth;
