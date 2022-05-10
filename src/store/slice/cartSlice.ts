import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInterFace {
	drawer_open: boolean;
	isCart: boolean | undefined;
}

const initialState: InitialStateInterFace = {
	drawer_open: false,
	isCart: undefined,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleDrawer: (
			state,
			action: PayloadAction<{ open: boolean; isCart?: boolean }>
		) => {
			state.drawer_open = action.payload.open;
			state.isCart = action.payload.isCart;
		},
	},
});

export const { toggleDrawer } = cartSlice.actions;

export default cartSlice.reducer;
