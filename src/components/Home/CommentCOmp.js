import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonalInfo from "./PersonalInfo";
import CommentProfile from "./CommentProfile";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const CommentCOmp = ({ props, comm }) => {
	const [data, setData] = useState([]);

	const getComments = async () => {
		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${localURL}/api/comment/"62a0b996cb9704a9e4a81a1c/"62a0d6267709bdfcda71bf29`;
		const url2 = `http://localhost:3322/api/comment/${props.user}/${props._id}/`;
		await axios.get(url2).then((res) => {
			setData(res.data.data);
		});
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
							<LoveIconComment />
							<div>
								Total like: <span>{0}</span>
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
