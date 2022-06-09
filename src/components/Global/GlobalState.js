import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	signIn: null,
	post: [],
	singlePost: {},
	singleUser: {},
};

const GlobalState = createSlice({
	name: "second",
	initialState,
	reducers: {
		createUser: (state, { payload }) => {
			state.signIn = payload;
		},
		postState: (state, { payload }) => {
			state.post = payload;
		},
		singlePostState: (state, { payload }) => {
			state.singlePost = payload;
		},
		singleUserState: (state, { payload }) => {
			state.singleUser = payload;
		},
		signOut: (state) => {
			state.signIn = null;
		},
	},
});

export const {
	createUser,
	signOut,
	postState,
	singlePostState,
	singleUserState,
} = GlobalState.actions;

export default GlobalState.reducer;
