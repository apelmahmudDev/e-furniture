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
		addToWishlist: (
			state: InitialStateInterFace,
			action: PayloadAction<ProductInterface>
		) => {
			const product = action.payload;
			console.log(product);

			if (state.wishlist.some((pd) => pd._id === product._id)) {
				state.wishlist = state.wishlist.filter((pd) => pd._id !== product._id);
			} else {
				state.wishlist = [
					...state.wishlist,
					{ ...product, createdAt: format(new Date(), "dd MMM, yyyy") },
				];
			}
		},
	},
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
