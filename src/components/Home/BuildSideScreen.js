import React from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";

const BuildSideScreen = () => {
	return (
		<Container>
			<Wrapper>
				<Holder>
					<Image src={pix} />
					<Hold>
						<Name>name</Name>
						<Profile>profile</Profile>
					</Hold>
				</Holder>

				<Text>
					<Suggest>Suggestions For You</Suggest>
					<Action>See All</Action>
				</Text>

				<Text>
					<Holder>
						<Image1 src={pix} />
						<Hold>
							<Name>name</Name>
							<Profile>profile</Profile>
						</Hold>
					</Holder>

					<Content>Follow</Content>
				</Text>
			</Wrapper>
		</Container>
	);
};

export default BuildSideScreen;

const Image1 = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;

const Content = styled.div`
	cursor: pointer;
	color: #69bff8;
`;

const Action = styled.div`
	cursor: pointer;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 12px;
`;

const Suggest = styled.div`
	font-weight: 700;
	font-size: 13px;
	color: gray;
	cursor: pointer;
`;
const Text = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Profile = styled.div`
	font-size: 12px;
`;
const Name = styled.div`
	font-weight: 700;
	font-size: 12px;
`;
const Hold = styled.div``;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;
const Holder = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
`;

const Wrapper = styled.div`
	margin-left: 20px;
	width: 85%;
`;
const Container = styled.div`
	width: 400px;
	position: fixed;
`;
