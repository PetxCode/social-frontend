import React from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";
import { BsThreeDots, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { FaRegComment, FaRegSmileWink } from "react-icons/fa";

const BuildMainScreen = () => {
	return (
		<Container>
			<TopBuild>
				<Holder>
					<Image src={pix} />
					<Name>name</Name>
				</Holder>
			</TopBuild>

			<PostBuild>
				<Top>
					<Hold>
						<ImageProfile src={pix} />
						<ProfileHolder>
							<ProfileName>name</ProfileName>
							<Profile>Original</Profile>
						</ProfileHolder>
					</Hold>

					<DotIcon />
				</Top>

				<PostImage src={pix} />

				<Icons>
					<Hold>
						<LoveIcon />
						<CommentIcon />
						<SendIcon />
					</Hold>

					<SavedIcon />
				</Icons>
				<LikePost>
					<span>{0}</span>likes{" "}
				</LikePost>

				<Post>
					<span>name</span>
					<Content>What were takeaways from today's service?... </Content>
				</Post>

				<View>
					View All <span>{0}</span> comments{" "}
				</View>

				<Comment>
					<Hold>
						<span>name</span>
						<Content>What were takeaways from today's service?... </Content>
					</Hold>

					<LoveIconComment />
				</Comment>

				<Time>Posted 3Hours Ago</Time>

				<PostInput>
					<PostIcon />
					<Input placeholder="Add a commment..." />
					<Text>Post</Text>
				</PostInput>
			</PostBuild>
		</Container>
	);
};

export default BuildMainScreen;

const Comment = styled.div`
	margin-left: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
`;

const Text = styled.div`
	font-weight: bold;
	color: lightblue;
	font-size: 18px;
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
	font-size: 18px;

	::placeholder {
		font-family: Poppins;
		font-size: 18px;
	}
`;

const PostIcon = styled(FaRegSmileWink)`
	margin: 0 10px;
	font-size: 30px;
`;
const PostInput = styled.div`
	display: flex;
	padding: 20px 0;

	border-top: 1px solid silver;
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
	display: flex;
	font-size: 18px;
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
	font-size: 20px;
	font-family: Poppins;
	span {
		font-weight: 700;
		margin-right: 5px;
	}
`;

const CommentIcon = styled(FaRegComment)`
	font-size: 30px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;
const SendIcon = styled(FiSend)`
	font-size: 30px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;
const SavedIcon = styled(BsBookmark)`
	font-size: 30px;
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
	font-size: 35px;
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
`;

const PostImage = styled.img`
	width: 100%;
	height: 500px;
	object-fit: cover;
`;

const DotIcon = styled(BsThreeDots)`
	font-size: 30px;
	color: silver;
`;
const Profile = styled.div``;
const Hold = styled.div`
	display: flex;
`;

const ProfileName = styled.div`
	font-weight: 700;
	font-size: 20px;
`;

const ProfileHolder = styled.div`
	line-height: 1.2;
`;

const ImageProfile = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50px;
	outline: 4px solid purple;
	border: 2px solid transparent;
	background-clip: content-box;
	margin-right: 15px;
`;

const Top = styled.div`
	display: flex;
	margin: 20px;
	padding: 10px 0;
	justify-content: space-between;
	align-items: center;
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
`;

const Image = styled.img`
	width: 90px;
	height: 90px;
	border-radius: 50%;
	object-fit: cover;
	outline: 4px solid purple;
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
