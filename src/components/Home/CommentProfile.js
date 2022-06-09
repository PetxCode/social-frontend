import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CommentProfile = ({ props, userInfo, name, myImage }) => {
	const id = props.posted;

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
		<div>
			<Div>{userInfo ? user?.userName : null}</Div>
			<Div>{name ? user?.fullName : null}</Div>
		</div>
	);
};

export default CommentProfile;

const Div = styled.div`
	font-weight: 700;
	margin-right: 5px;
	position: relative;

	:after {
		content: "";
		height: 2px;
		background-color: purple;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		transition: all 350ms;
		opacity: 0;
	}

	:hover {
		cursor: pointer;
		:after {
			opacity: 1;
		}
	}
`;

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
