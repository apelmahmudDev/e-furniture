import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from "date-fns";

export interface ProductInterface {
	_id: string;
	name: string;
	price: string | number;
	description: string;
	image: string;
	category: string;
	// subCategory: string;
	createdAt?: string;
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
			state.wishlist = [
				...state.wishlist,
				{ ...action.payload, createdAt: format(new Date(), "dd MMM, yyyy") },
			];
		},
	},
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
