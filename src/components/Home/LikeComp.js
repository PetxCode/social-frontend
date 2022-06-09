import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LikeComp = ({ props }) => {
	const user = useSelector((state) => state.signIn);
	const [postData, setPostData] = useState([]);

	const likePost = async (id) => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${localURL}/api/like/${user._id}/${id}`;

		await axios.post(url).then((res) => {
			setPostData(res.data.data);
		});
	};

	const dislikePost = async (id) => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${localURL}/api/like/${user._id}/${id}`;

		await axios.delete(url).then((res) => {
			setPostData(res.data.data);
		});
	};

	return (
		<div>
			{props.like.includes(user._id) ? (
				<LoveIcon1
					onClick={() => {
						dislikePost(props._id);
						window.location.reload();
					}}
				/>
			) : (
				<LoveIcon
					onClick={() => {
						likePost(props._id);
						window.location.reload();
					}}
				/>
			)}
		</div>
	);
};

export default LikeComp;

const LoveIcon1 = styled(AiFillHeart)`
	font-size: 30px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;
	color: red;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const LoveIcon = styled(AiOutlineHeart)`
	font-size: 30px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;

	:hover {
		cursor: pointer;
		color: silver;
	}
`;
