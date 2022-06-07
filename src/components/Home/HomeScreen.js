import React from "react";
import styled from "styled-components";
import BuildMainScreen from "./BuildMainScreen";
import BuildSideScreen from "./BuildSideScreen";

const HomeScreen = () => {
	return (
		<Container>
			<Wrapper>
				<MainScreen>
					<BuildMainScreen />
				</MainScreen>
				<SideScreen>
					<BuildSideScreen />
				</SideScreen>
			</Wrapper>
		</Container>
	);
};

export default HomeScreen;

const SideScreen = styled.div`
	width: 400px;
	display: flex;
	justify-content: flex-start;

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

const MainScreen = styled.div`
	width: 550px;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 900px) {
		display: flex;
		justify-content: center;
		width: 400px;
	}
	@media screen and (max-width: 400px) {
		display: flex;
		justify-content: center;
		width: 100%;
	}
`;

const Wrapper = styled.div`
	width: 900px;
	display: flex;
	justify-content: space-between;
	padding-top: 15px;

	@media screen and (max-width: 900px) {
		display: flex;
		justify-content: center;
	}
`;

const Container = styled.div`
	width: 100%;
	min-height: calc(100vh - 70px);
	height: 100%;
	background-color: #fafafa;
	display: flex;
	justify-content: center;
	padding-top: 70px;
`;
