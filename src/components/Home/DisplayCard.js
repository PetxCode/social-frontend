import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { singlePostState, singleUserState } from "../Global/GlobalState";
import pix from "./babe.jpeg";

const DisplayCard = ({ setDisplay, props }) => {
	const [postData, setPostData] = useState([]);
	const [userData, setUserData] = useState([]);

	const dispatch = useDispatch();
	const myUser = useSelector((state) => state.signIn);
	const singlePost = useSelector((state) => state.singlePost);
	const singleUser = useSelector((state) => state.singleUser);

	const getPostData = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/post/${props?._id}`;
		await axios.get(url).then((res) => {
			setPostData(res.data.data);

			// console.log("Post Data: ", postData);
			// dispatch(singlePostState(res.data.data));
		});
	};

	// console.log(props?._id, postData?.user);

	const getUserData = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/user/${postData?.user}/user`;
		await axios.get(url).then((res) => {
			setUserData(res.data.data);
		});
	};

	console.log("userData: ", userData);

	const getFollowData = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/follow}`;
		await axios.post(url, { follower: myUser._id, following: postData.user });
		console.log(myUser._id, postData.user);
	};

	const getFollowDataNow = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/follow/${myUser._id}/${singlePost.user}}`;
		const url2 = `http://localhost:3322/api/follow/${myUser?._id}/${singlePost.user}`;
		await axios.patch(url2);
	};

	useEffect(() => {
		getPostData();
		getUserData();
	}, [postData, userData]);
	return (
		<Container
			onMouseEnter={() => {
				setDisplay(true);
			}}
			onMouseLeave={() => {
				setDisplay(false);
			}}
		>
			<Wrapper>
				{props._id}
				<Top>
					<Image src={userData?.avatar} />
					<Holder>
						<Name>{userData?.userName}</Name>
						<RealName>{userData?.fullName}</RealName>

						<Follow>
							Followed by <span>Another Name</span>
						</Follow>
					</Holder>
				</Top>

				<Middle>
					<CountHolder>
						<Count>{userData?.post?.length}</Count>
						<Title>Post</Title>
					</CountHolder>
					<CountHolder>
						<Count>{userData?.follower?.length}</Count>
						<Title>follower</Title>
					</CountHolder>
					<CountHolder>
						<Count>{userData?.following?.length}</Count>
						<Title>following</Title>
					</CountHolder>
				</Middle>

				<Bottom>
					{userData?.post?.map((props) => (
						<Images src={props?.avatar} key={props?._id} />
					))}
				</Bottom>
				{myUser?._id === userData?.user ? null : (
					<Botton
						onClick={() => {
							getFollowDataNow();
							console.log("Hello:", myUser?._id, userData?.user);
						}}
					>
						Follow
					</Botton>
				)}

				{/* <Botton
					onClick={() => {
						getFollowData();
						console.log("Hello:", props._id);

						console.log(myUser._id, postData.user);
					}}
				>
					Follow
				</Botton> */}
			</Wrapper>
		</Container>
	);
};

export default DisplayCard;

const Botton = styled.div`
	margin: 10px;
	background-color: rgb(16, 143, 233);
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-weight: 500;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		background-color: rgba(16, 143, 233, 0.8);
	}
`;

const Images = styled.img`
	width: 116px;
	height: 116px;
	object-fit: cover;
	margin: 3px;

	:hover {
		opacity: 0.9;
	}
`;

const Bottom = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const Title = styled.div`
	text-transform: capitalize;
`;
const Count = styled.div`
	font-weight: 700;
`;
const CountHolder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Middle = styled.div`
	height: 50px;
	border-top: 1px solid silver;
	border-bottom: 1px solid silver;
	padding: 10px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Follow = styled.div`
	color: gray;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 20px;
`;

const RealName = styled.div`
	font-size: 12px;
	margin-bottom: 10px;
	color: gray;
	margin-top: 5px;
`;

const Name = styled.div`
	color: rgb(16, 143, 233);
`;

const Holder = styled.div``;

const Top = styled.div`
	display: flex;
	padding: 10px 0;
	margin: 20px;
`;

const Wrapper = styled.div`
	padding-bottom: 10px;
`;

const Container = styled.div`
	width: 350px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	border-radius: 4px;
	font-size: 12px;
	z-index: 12;
`;
