import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Offline, Online } from "react-detect-offline";

const ViewImage = ({ props, userInfo, name, myImage }) => {
	const id = props.user;
	const [user, setUser] = useState({});

	const getUserInfo = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/user/${id}`;
		await axios.get(url).then((res) => {
			setUser(res.data.data);
		});
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<Container>
			<Holder>
				<Offline>
					<Dot />
				</Offline>
				<Online>
					<Dot1 />
				</Online>
			</Holder>
			<ImageProfile src={user.avatar} />
		</Container>
	);
};

export default ViewImage;

const Dot1 = styled.div`
	width: 15px;
	height: 15px;
	background-color: green;
	border-radius: 50%;
`;

const Dot = styled.div`
	width: 15px;
	height: 15px;
	background-color: red;
	border-radius: 50%;
`;
const Holder = styled.div`
	position: absolute;
	right: 15px;
	top: -5px;
`;
const Container = styled.div`
	position: relative;
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
