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
	drawer_open: boolean;
	isCart: boolean | undefined;
	cart: ProductInterface[];
}

const initialState: InitialStateInterFace = {
	drawer_open: false,
	isCart: undefined,
	cart: [],
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
		addToCart: (state, action: PayloadAction<ProductInterface>) => {
			state.cart = [...state.cart, action.payload];
		},
	},
});

export const { toggleDrawer, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
