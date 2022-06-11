import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// state
const initialState = {
	isGoToOrderCompletedPage: false,
};

// slice
export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setIsGoToOrderCompletedPage: (state, action: PayloadAction<boolean>) => {
			state.isGoToOrderCompletedPage = action.payload;
		},
	},
});

export const { setIsGoToOrderCompletedPage } = globalSlice.actions;

export default globalSlice.reducer;
