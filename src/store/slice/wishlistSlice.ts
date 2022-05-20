import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductInterface {
	id: string;
	name: string;
	price: string | number;
	description: string;
	image: string;
	category: string;
	// subCategory: string;
}
interface InitialStateInterFace {
	wishlist: ProductInterface[];
}

const initialState: InitialStateInterFace = {
	wishlist: [],
};

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		addToWishlist: (state, action: PayloadAction<ProductInterface>) => {
			state.wishlist = [...state.wishlist, action.payload];
		},
	},
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
