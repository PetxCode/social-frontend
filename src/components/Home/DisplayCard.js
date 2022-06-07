import React from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";

const DisplayCard = ({ setDisplay }) => {
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
				<Top>
					<Image src={pix} />
					<Holder>
						<Name>name</Name>
						<RealName>real name</RealName>

						<Follow>
							Followed by <span>Another Name</span>
						</Follow>
					</Holder>
				</Top>

				<Middle>
					<CountHolder>
						<Count>{0}</Count>
						<Title>Post</Title>
					</CountHolder>
					<CountHolder>
						<Count>{0}</Count>
						<Title>followers</Title>
					</CountHolder>
					<CountHolder>
						<Count>{0}</Count>
						<Title>following</Title>
					</CountHolder>
				</Middle>

				<Bottom>
					<Images src={pix} />
					<Images src={pix} />
					<Images src={pix} />
				</Bottom>
				<Botton>Follow</Botton>
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

	:hover {
		opacity: 0.9;
	}
`;

const Bottom = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
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
	font-size: 13px;
	margin-bottom: 15px;
	color: gray;
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
