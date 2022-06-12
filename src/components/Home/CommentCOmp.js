import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonalInfo from "./PersonalInfo";
import CommentProfile from "./CommentProfile";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const CommentCOmp = ({ props, comm }) => {
	const user = useSelector((state) => state.signIn);
	const [data, setData] = useState([]);

	const getComments = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/comment/"62a0b996cb9704a9e4a81a1c/"62a0d6267709bdfcda71bf29`;
		const url2 = `http://localhost:3322/api/comment/${props.user}/${props._id}/`;
		await axios.get(url2).then((res) => {
			setData(res.data.data);
		});
	};

	const likePost = async (id) => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/comment/like/${user._id}/${props._id}/${id}`;

		await axios.post(url);
	};

	const dislikePost = async (id) => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/comment/like/${user._id}/${props._id}/${id}`;

		await axios.delete(url);
	};

	useEffect(() => {
		getComments();
	}, []);
	return (
		<>
			{comm ? (
				<Hold>
					{data?.comment?.map((props) => (
						<Div key={props._id}>
							<CommentProfile props={props} userInfo />
							<div> {props?.comment} </div>
							<Space />
							{props?.like.includes(user._id) ? (
								<LoveIconComment1
									onClick={() => {
										dislikePost(props._id);
										console.log("file deleted");
									}}
								/>
							) : (
								<LoveIconComment
									onClick={() => {
										likePost(props._id);
									}}
								/>
							)}

							<div>
								Total like: <span>{props.like.length}</span>
							</div>
						</Div>
					))}
				</Hold>
			) : null}
		</>
	);
};

export default CommentCOmp;

const Hold = styled.div`
	width: 95%;
`;
const Space = styled.div`
	flex: 1;
`;

const Div = styled.div`
	display: flex;
	width: 100%;
	margin: 5px 0;
`;

const LoveIconComment1 = styled(AiFillHeart)`
	font-size: 18px;
	transition: all 350ms;
	color: gray;
	margin-right: 5px;
	color: red;
	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const LoveIconComment = styled(AiOutlineHeart)`
	font-size: 18px;
	transition: all 350ms;
	color: gray;
	margin-right: 5px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;
