import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";
import { BsThreeDots, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { FaRegComment, FaRegSmileWink } from "react-icons/fa";

import axios from "axios";
import PersonalInfo from "./PersonalInfo";
import ViewImage from "./ImageProfile";
import CommentCOmp from "./CommentCOmp";
import { useSelector, useDispatch } from "react-redux";
import LikeComp from "./LikeComp";

import moment from "moment";
import { Link } from "react-router-dom";
import DisplayCard from "./DisplayCard";
import {
	postState,
	singleUserProfile,
	singleUserProfileErase,
} from "../Global/GlobalState";

const BuildMainScreen = () => {
	const [postData, setPostData] = useState([]);

	const dispatch = useDispatch();
	const user = useSelector((state) => state.signIn);
	const post = useSelector((state) => state.post);

	const [display, setDisplay] = useState(false);
	const [comment, setComment] = useState("");

	const getPosts = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${localURL}/api/post/posts`;

		await axios.get(url).then((res) => {
			dispatch(postState(res.data.data));
		});
	};

	const makeComments = async (ID) => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${localURL}/api/comment/${user._id}/${ID}`;

		await axios.post(url, { comment });
		setComment("");
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<Container>
			<TopBuild>
				<Holder>
					<Image src={pix} />
					<Name>name</Name>
				</Holder>
			</TopBuild>

			<div>
				{post?.map((props) => (
					<PostBuild key={props._id}>
						<Top>
							<Hold>
								{/* <ImageProfile src={pix} /> */}
								<ViewImage props={props} />
								<ProfileHolder>
									<ProfileName
										onMouseEnter={() => {
											setDisplay(true);
										}}
										onMouseLeave={() => {
											setDisplay(false);
										}}
									>
										<PersonalInfo props={props} userInfo />
										{display ? (
											<Div2>
												<DisplayCard setDisplay={setDisplay} props={props} />
											</Div2>
										) : null}
									</ProfileName>
									<Profile>
										<PersonalInfo props={props} name />
									</Profile>
								</ProfileHolder>
							</Hold>

							<DotIcon />
						</Top>

						<PostImage src={props.avatar} />

						<Icons>
							<Hold>
								<LikeComp props={props} />
								<CommentIcon
									onClick={() => {
										// dispatch(singleUserProfileErase());
									}}
								/>
								<SendIcon />
							</Hold>

							<SavedIcon />
						</Icons>
						<LikePost>
							<span>{props?.like.length}</span>likes{" "}
						</LikePost>

						<Post>
							<Super to={`/detail/${props._id}`}>
								<span>
									<PersonalInfo props={props} userInfo />
								</span>
							</Super>

							{props.message}
						</Post>

						<View>
							View All <span>{props.comment.length}</span> comments{" "}
						</View>

						<Comment>
							<Hold>
								{/* <span>name</span>
				<Content>What were takeaways from today's service?... </Content> */}
								<CommentCOmp props={props} comm />
							</Hold>

							{/* <LoveIconComment /> */}
						</Comment>

						<Time> Posted {moment(props.createdAt).fromNow()}</Time>

						<PostInput>
							<PostIcon />
							<Input
								placeholder="Add a commment..."
								value={comment}
								onChange={(e) => {
									setComment(e.target.value);
								}}
							/>
							<Text
								onClick={() => {
									makeComments(props._id);
									console.log("Click: ", props._id);
								}}
							>
								Post
							</Text>
						</PostInput>
					</PostBuild>
				))}
			</div>
		</Container>
	);
};

export default BuildMainScreen;

const Span = styled.div`
	position: relative;
	font-weight: 700;
	z-index: 200;
`;

const Div2 = styled.div`
	position: absolute;
	top: -3px;
`;

const Super = styled(Link)`
	text-decoration: none;
	color: black;
`;

const Comment = styled.div`
	margin-left: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 15px;
	span {
		margin-right: 5px;
		font-weight: 700;

		:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
`;

const View = styled.div`
	color: lightgray;
	margin: 20px;
	font-size: 15px;
`;

const Text = styled.div`
	font-weight: bold;
	color: lightblue;
	font-size: 15px;
	text-transform: uppercase;
	margin-right: 12px;

	:hover {
		cursor: pointer;
	}
`;

const Input = styled.input`
	outline: none;
	border: 0;
	background-color: transparent;
	flex: 1;
	font-size: 15px;

	::placeholder {
		font-family: Poppins;
		font-size: 15px;
	}
`;

const PostIcon = styled(FaRegSmileWink)`
	margin: 0 10px;
	font-size: 30px;
`;
const PostInput = styled.div`
	display: flex;
	padding: 20px 0;
	font-size: 15px;
	border-top: 1px solid silver;
	align-items: center;
`;

const Content = styled.div``;

const Time = styled.div`
	color: silver;
	text-transform: uppercase;
	font-size: 12px;
	margin-left: 20px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Post = styled.div`
	margin: 0 20px;
	/* display: flex; */
	font-size: 15px;
	width: 95%;
	span {
		margin-right: 5px;
		font-weight: 500;
		:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
`;

const LikePost = styled.div`
	margin-left: 20px;
	margin-top: 15px;
	font-size: 15px;
	font-family: Poppins;
	span {
		font-weight: 700;
		margin-right: 5px;
	}
`;

const CommentIcon = styled(FaRegComment)`
	font-size: 25px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;
const SendIcon = styled(FiSend)`
	font-size: 25px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;
const SavedIcon = styled(BsBookmark)`
	font-size: 25px;
	transition: all 350ms;
	color: gray;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const LoveIconComment = styled(AiOutlineHeart)`
	font-size: 25px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const LoveIcon = styled(AiOutlineHeart)`
	font-size: 29px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 20px;
	align-items: center;
	margin-top: 10px;
`;

const PostImage = styled.img`
	width: 100%;
	height: 500px;
	object-fit: cover;
`;

const DotIcon = styled(BsThreeDots)`
	font-size: 20px;
	color: black;
`;
const Profile = styled.div`
	margin-top: 3px;
`;
const Hold = styled.div`
	display: flex;
	font-size: 12px;
	width: 100%;
`;

const ProfileName = styled.div`
	font-weight: 700;
	font-size: 12px;
	position: relative;
	cursor: pointer;
`;

const ProfileHolder = styled.div`
	line-height: 1.2;
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

const Top = styled.div`
	display: flex;
	margin: 0px 20px;
	padding: 10px 0;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid silver;
`;

const PostBuild = styled.div`
	margin: 10px 0;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	border-radius: 7px;
`;

const Name = styled.div`
	margin-top: 5px;
	font-size: 11px;
`;

const Image = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	object-fit: cover;
	outline: 2px solid purple;
	border: 2px solid transparent;
	background-clip: content-box;
`;

const Holder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TopBuild = styled.div`
	padding: 20px 0;
	padding-left: 20px;
	background-color: white;
	border-radius: 7px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 40px;
`;

const Container = styled.div`
	width: 100%;
`;
