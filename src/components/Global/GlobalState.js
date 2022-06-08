import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	signIn: null,
};

const GlobalState = createSlice({
	name: "second",
	initialState,
	reducers: {
		createUser: (state, { payload }) => {
			state.signIn = payload;
		},
		signOut: (state) => {
			state.signIn = null;
		},
	},
});

export const { createUser, signOut } = GlobalState.actions;

export default GlobalState.reducer;
