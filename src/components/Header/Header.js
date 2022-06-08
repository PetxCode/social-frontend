import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BiAddToQueue, BiUserCircle } from "react-icons/bi";
import pix from "./babe.jpeg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	const [auth, setAuth] = useState(false);
	return (
		<Container>
			<Wrapper>
				<Hold>
					<Logo to="/">Social Build</Logo>
					<SearchBar>
						<Icon />
						<SearchInput placeholder="search" />
					</SearchBar>
				</Hold>
				<Hold>
					{auth ? (
						<div>
							<HomeIcon />
							<PostIcon />
							<LoveIcon />
							<Image src={pix} />
						</div>
					) : (
						<Nav to="/register">
							<Icons />
							<span>Register</span>
						</Nav>
					)}
				</Hold>
			</Wrapper>
		</Container>
	);
};

export default Header;

const Icons = styled(BiUserCircle)`
	font-size: 30px;
`;

const Nav = styled(NavLink)`
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 900;
	text-decoration: none;
	color: black;
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	width: 30px;
	height: 30px;
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
	font-size: 16px;

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
	background-color: l#fafafa;

	@media screen and (max-width: 642px) {
		width: 250px;
	}

	@media screen and (max-width: 549px) {
		width: 200px;
	}

	@media screen and (max-width: 425px) {
		display: none;
	}
`;

const Logo = styled(Link)`
	color: black;
	margin-right: 40px;
	font-weight: 500;
	font-size: 25px;
	font-style: italic;
	font-family: Pacifico;
	line-height: 1;
	text-decoration: none;
	@media screen and (max-width: 768px) {
		margin-right: 20px;
	}
`;

const Hold = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 900px;
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: space-between;
`;

const Container = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid silver;
	position: fixed;
	background-color: white;
`;
