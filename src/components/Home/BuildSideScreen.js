import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pix from "./babe.jpeg";
import DisplayCard from "./DisplayCard";

const BuildSideScreen = () => {
	const [display, setDisplay] = useState(false);
	const user = useSelector((state) => state.signIn);
	const [getUsers, setGetUsers] = useState([]);

	const allUsers = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/user`;
		await axios.get(url).then((res) => {
			setGetUsers(res.data.data);
		});
	};

	useEffect(() => {
		allUsers();
	}, []);

	return (
		<Container>
			<Wrapper>
				<Holder>
					<Link to="/profile">
						<Image src={user.avatar} />
					</Link>

					<Hold>
						<Name>{user.userName}</Name>
						<Profile>{user.fullName}</Profile>
					</Hold>
				</Holder>

				<Text>
					<Suggest>Suggestions For You</Suggest>
					<Action>See All</Action>
				</Text>

				{getUsers?.map((props) => (
					<Text key={props._id}>
						<Holder>
							<Image1 src={props.avatar} />

							<Hold>
								<RealName
									onMouseEnter={() => {
										setDisplay(true);
									}}
									onMouseLeave={() => {
										setDisplay(false);
									}}
								>
									{props.userName}
								</RealName>
								<Profile>{props.fullName}</Profile>

								{display ? (
									<Div>
										<DisplayCard setDisplay={setDisplay} props={props} />{" "}
									</Div>
								) : null}
							</Hold>
						</Holder>

						<Content
							onClick={() => {
								console.log(props._id);
							}}
						>
							Follow
						</Content>
					</Text>
				))}
			</Wrapper>
		</Container>
	);
};

export default BuildSideScreen;

const Div = styled.div`
	position: absolute;
	top: -3px;
`;

const Image1 = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;

const Content = styled.div`
	cursor: pointer;
	color: rgb(16, 143, 233);
`;

const Action = styled.div`
	cursor: pointer;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 12px;
`;

const Suggest = styled.div`
	font-weight: 700;
	font-size: 13px;
	color: gray;
`;
const Text = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Profile = styled.div`
	font-size: 12px;
`;
const RealName = styled.div`
	font-size: 12px;
	font-weight: 700;
	position: relative;
	z-index: 10;

	:after {
		content: "";
		height: 2px;
		background-color: purple;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		opacity: 0;
		transition: all 350ms;
	}

	:hover {
		cursor: pointer;
		:after {
			opacity: 1;
		}
	}
`;

const Name = styled.div`
	font-weight: 700;
	font-size: 12px;
`;
const Hold = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;
const Holder = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
	text-decoration: none;
	color: black;
`;

const Wrapper = styled.div`
	margin-left: 20px;
	width: 85%;
`;
const Container = styled.div`
	width: 400px;
	position: fixed;
`;
