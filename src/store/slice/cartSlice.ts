import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductInterface {
	_id: string;
	name: string;
	price: number | string;
	description: string;
	image: string;
	category: string;
	// subCategory: string;
}
interface InitialStateInterFace {
	drawer_open: boolean;
	isCart: boolean | undefined;
	cart: ProductInterface[];
	subTotal: number;
}

const initialState: InitialStateInterFace = {
	drawer_open: false,
	isCart: undefined,
	cart: [],
	subTotal: 0,
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
			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);
		},

		removeFromCart: (state, action: PayloadAction<string>) => {
			state.cart = state.cart.filter(
				(product) => product._id !== action.payload
			);
			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);
		},
	},
});

export const { toggleDrawer, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
