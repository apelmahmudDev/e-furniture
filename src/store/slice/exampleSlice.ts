import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInterFace {}

const initialState: InitialStateInterFace = {};

export const exampleSlice = createSlice({
	name: "example",
	initialState,
	reducers: {
		exampleTry: (state, action: PayloadAction<string>) => {},
	},
});

export const { exampleTry } = exampleSlice.actions;

export default exampleSlice.reducer;
