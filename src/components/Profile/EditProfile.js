import React, { useEffect, useState } from "react";
import pix from "./babe.jpeg";
import styled from "styled-components";
import { FaFacebookSquare, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import Swal from "sweetalert2";

const UpdateProfile = () => {
	const { id } = useParams();
	const naviagte = useNavigate();
	const [image, setImage] = useState(pix);
	const [avatar, setAvatar] = useState("");

	console.log(id);

	const yupSchema = yup.object().shape({
		fullName: yup.string().required("This field should be filled"),
		userName: yup.string().required("This field should be filled"),
		bio: yup.string().required("This field should be filled"),
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
		const { fullName, userName, bio } = val;

		const formData = new FormData();

		formData.append("fullName", fullName);
		formData.append("userName", userName);
		formData.append("bio", bio);
		formData.append("avatar", avatar);

		const config = {
			"content-type": "multipart/form-data",
		};

		const localURL = "http://localhost:3322";
		const mainURL = "https://social-backend22.herokuapp.com";

		const url = `${localURL}/api/user/${id}`;

		await axios.patch(url, formData, config);

		Swal.fire({
			icon: "success",
			title: "Verify your Account",
			text: "Check your mail for complete registeration",
			footer: '<a href="">This is developed by CodeLab Students: set05</a>',
		}).then(() => {
			naviagte(-1);
		});
	});

	useEffect(() => {}, []);

	return (
		<Container>
			<Wrapper onSubmit={onSubmit} type="content-type: multipart/form-data">
				<Logo>Update your Profile</Logo>

				<Text>Want to make your profile more attractive... Then do it. </Text>

				<Button>
					{/* <Icon /> */}
					<span>Let's get Started</span>
				</Button>

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
					<Icon2 />
					<Input placeholder="Full Name" {...register("fullName")} />
				</InputHolder>
				<Error>{errors?.fullName?.message}</Error>
				<InputHolder>
					<Icon3 />
					<Input placeholder="Username" {...register("userName")} />
				</InputHolder>
				<Error>{errors?.userName?.message}</Error>

				<BioInputHolder>
					<Icon1 />
					<BioInput placeholder=" Brief Bio" {...register("bio")} />
				</BioInputHolder>
				<Error>{errors?.bio?.message}</Error>

				<Button type="submit">
					{/* <Icon6 /> */}
					<span>Done Updating, submit</span>
				</Button>
			</Wrapper>
		</Container>
	);
};

export default UpdateProfile;

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
	margin: 0 10px;
`;

const BioInput = styled.textarea`
	flex: 1;
	outline: none;
	border: 0;
	height: 90%;
	resize: none;

	::placeholder {
		font-family: Poppins;
	}
`;

const Input = styled.input`
	flex: 1;
	outline: none;
	border: 0;
	height: 90%;

	::placeholder {
		font-family: Poppins;
	}
`;

const Icon1 = styled(AiOutlineMail)`
	margin: 0 10px;
	color: gray;
`;

const BioInputHolder = styled.div`
	margin-top: 10px;
	border: 1px solid silver;
	width: 80%;
	height: 35px;
	display: flex;
	align-items: center;
	border-radius: 3px;
	height: 150px;
`;

const InputHolder = styled.div`
	margin-top: 10px;
	border: 1px solid silver;
	width: 80%;
	height: 35px;
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
	padding: 10px 40px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	font-size: 14px;
	cursor: pointer;
	border: 0;
	font-family: Poppins;
`;

const Text = styled.div`
	padding: 0 30px;
	color: gray;
	text-align: center;
	line-height: 1.2;
	font-size: 14px;
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
	padding-top: 70px;
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	padding-bottom: 30px;
`;
