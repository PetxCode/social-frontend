import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivatePage = ({ children }) => {
	const auth = useSelector((state) => state.signIn);
	return auth ? children : <Navigate to="/register" />;
};

export default PrivatePage;
