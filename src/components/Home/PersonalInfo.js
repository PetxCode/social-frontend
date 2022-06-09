import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PersonalInfo = ({ props, userInfo, name, myImage }) => {
	const id = props.user;

	const [user, setUser] = useState({});

	const getUserInfo = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${localURL}/api/user/${id}`;
		await axios.get(url).then((res) => {
			setUser(res.data.data);
		});
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<div srtle={{ display: "flex" }}>
			<div>{userInfo ? user?.userName : null}</div>
			<div>{name ? user?.fullName : null}</div>
		</div>
	);
};

export default PersonalInfo;

const ImageProfile = styled.img`
	width: 35px;
	height: 35px;
	object-fit: cover;
	border-radius: 50px;
	outline: 2px solid purple;
	border: 2px solid transparent;
	background-clip: content-box;
	margin-right: 15px;
`;
