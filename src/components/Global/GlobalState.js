import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	signIn: null,
	post: [],
	singlePost: {},
	singleUser: {},
	profile: [],
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

		singleUserProfile: (state, { payload }) => {
			state.profile = payload;
		},

		singleUserProfileErase: (state) => {
			state.profile = null;
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
	singleUserProfile,
	singleUserProfileErase,
} = GlobalState.actions;

export default GlobalState.reducer;
