import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	product_details_open: false,
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		handleProductDetails: (state, action: PayloadAction<boolean>) => {
			state.product_details_open = action.payload;
		},
	},
});

export const { handleProductDetails } = productSlice.actions;

export default productSlice.reducer;
