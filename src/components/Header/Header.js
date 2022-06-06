import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import pix from "./babe.jpeg";
const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Hold>
					<Logo>Social Build</Logo>
					<SearchBar>
						<Icon />
						<SearchInput placeholder="search" />
					</SearchBar>
				</Hold>
				<Hold>
					<HomeIcon />
					<PostIcon />
					<LoveIcon />
					<Image src={pix} />
				</Hold>
			</Wrapper>
		</Container>
	);
};

export default Header;
// const SearchBarIcon = styled.div``;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;

const HomeIcon = styled(AiFillHome)`
	font-size: 30px;
	margin: 0 10px;
	color: #000000;
	cursor: pointer;
`;
const PostIcon = styled(BiAddToQueue)`
	font-size: 30px;
	margin: 0 10px;
	color: #000000;
	cursor: pointer;
`;
const LoveIcon = styled(AiOutlineHeart)`
	font-size: 30px;
	margin: 0 10px;
	color: #000000;
	cursor: pointer;
`;

const SearchInput = styled.input`
	outline: none;
	border: 0;
	background-color: transparent;
	font-size: 20px;

	::placeholder {
		font-family: Poppins;
	}
`;

const Icon = styled(BsSearch)`
	margin: 0 10px;
`;

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	width: 350px;
	border: 1px solid silver;
	height: 40px;
	border-radius: 5px;
	background-color: lightgray;
`;

const Logo = styled.div`
	margin-right: 40px;
	font-weight: 500;
	font-size: 25px;
	font-style: italic;
`;

const Hold = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: space-between;
`;

const Container = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid silver;
	position: fixed;
	background-color: white;
`;
