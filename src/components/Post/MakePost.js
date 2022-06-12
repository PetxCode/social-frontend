import React, { useState } from "react";
import pix from "./babe.jpeg";
import styled from "styled-components";
import { FaFacebookSquare, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const MakePost = () => {
	const navigate = useNavigate();
	const auth = useSelector((state) => state.signIn);
	const [image, setImage] = useState(pix);
	const [avatar, setAvatar] = useState("");

	const yupSchema = yup.object().shape({
		message: yup.string().required("This field should be filled"),
	});

	const handleImage = (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
	};

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) });

	const onSubmit = handleSubmit(async (val) => {
		const { message } = val;
		console.log(val);
		const formData = new FormData();

		formData.append("message", message);
		formData.append("avatar", avatar);

		const config = {
			"content-type": "multipart/form-data",
		};

		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${mainURL}/api/post/${auth._id}/post`;

		await axios.post(url, formData, config);

		Swal.fire({
			icon: "success",
			title: "Post has been created",
			text: "See more posts",
			footer: '<a href="">This is developed by CodeLab Students: set05</a>',
		}).then(() => {
			navigate("/");
		});
	});

	return (
		<Container>
			<Wrapper onSubmit={onSubmit} type="content-type: multipart/form-data">
				<Logo>Make Post</Logo>

				<Text>Share your favourite image and post with your friends.</Text>

				<LineHolder>
					<Line />
					<span>or</span>
					<Line1 />
				</LineHolder>

				<ImageHold>
					<Image src={image} />
					<ImageLabel htmlFor="pix">Upload Image</ImageLabel>
					<ImageInput id="pix" onChange={handleImage} type="file" />
				</ImageHold>

				<InputHolder>
					<Icon1 />
					<Input placeholder="Message" {...register("message")} />
				</InputHolder>
				<Error>{errors?.message?.message}</Error>

				<Button type="submit">
					<Icon6 />
					<span>Post</span>
				</Button>
			</Wrapper>
		</Container>
	);
};

export default MakePost;

const Error = styled.div`
	font-size: small;
	color: red;
`;

const Linked = styled.div`
	display: flex;
`;
const Span = styled(Link)`
	color: rgba(16, 143, 233);
	cursor: pointer;
	margin-left: 5px;
	text-decoration: none;
`;

const Icon2 = styled(BsFillPersonFill)`
	margin: 0 10px;
	color: gray;
`;
const Icon3 = styled(FaRegUserCircle)`
	margin: 0 10px;
	color: gray;
`;
const Icon4 = styled(MdPassword)`
	margin: 0 10px;
	color: gray;
`;
const Icon6 = styled(GiPadlock)`
	margin-right: 10px;
`;

const Input = styled.textarea`
	flex: 1;
	outline: none;
	border: 0;
	height: 90%;
	resize: none;

	::placeholder {
		font-family: Poppins;
	}
`;

const Icon1 = styled(AiOutlineMail)`
	margin: 0 10px;
	color: gray;
`;

const InputHolder = styled.div`
	margin-top: 10px;
	border: 1px solid silver;
	width: 80%;
	height: 150px;
	display: flex;
	align-items: center;
	border-radius: 3px;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	font-size: 12px;
	padding: 8px 20px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

	margin: 10px 0;
	background-color: rgb(16, 143, 233);
	color: white;
	border-radius: 3px;
	cursor: pointer;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid transparent;
	outline: 2px solid purple;
	background-clip: content-box;
`;

const ImageHold = styled.div`
	margin-top: 20px;
	margin-left: 40px;
	margin-right: 40px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Line1 = styled.div`
	border-top: 1px solid silver;
	width: 100%;
	margin-right: 40px;
`;

const Line = styled.div`
	border-top: 1px solid silver;
	width: 100%;
	margin-left: 40px;
`;

const LineHolder = styled.div`
	display: flex;
	width: 100%;
	align-items: center;

	span {
		margin: 0 10px;
		text-transform: uppercase;
		font-size: 12px;
	}
`;

const Icon = styled(FaFacebookSquare)`
	margin-right: 10px;
`;

const Button = styled.button`
	background-color: rgb(16, 143, 233);
	outline: none;
	/* width: 100%; */
	color: white;
	margin: 20px 0px;
	padding: 10px 50px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	font-size: 14px;
	cursor: pointer;
	border: 0;
	font-family: Poppins;

	text-transform: uppercase;
`;

const Text = styled.div`
	padding: 0 30px;
	color: gray;
	text-align: center;
	line-height: 1.2;
	font-size: 14px;
	margin-bottom: 20px;
`;

const Logo = styled.div`
	font-family: Pacifico;
	margin-top: 50px;
	font-size: 35px;
	font-weight: 500;
	margin-bottom: 10px;
`;

const Wrapper = styled.form`
	width: 350px;
	height: 100%;
	min-height: 100px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	margin-top: 30px;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 5px;
	justify-content: center;
`;

const Container = styled.div`
	padding-top: 120px;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-bottom: 30px;
`;
