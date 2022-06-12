import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { SummaryInterface } from "../../types/shipping/checkoutSummary.type";

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
	checkoutSummary: SummaryInterface;
}

const initialState: InitialStateInterFace = {
	drawer_open: false,
	isCart: undefined,
	cart: [],
	subTotal: 0,
	checkoutSummary: {
		subtotal: 0,
		shippingCharge: 0,
		total: 0,
		discount: 0,
		payableTotal: 0,
	},
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

			// checkout summary calculation
			checkoutSummaryCalc(state);
		},

		removeFromCart: (state, action: PayloadAction<string>) => {
			state.cart = state.cart.filter(
				(product) => product._id !== action.payload
			);
			state.subTotal = state.cart.reduce(
				(sum, product) => sum + Number(product.price),
				0
			);

			// checkout summary calculation
			checkoutSummaryCalc(state);
		},

		resetCart: (state) => {
			state.cart = [];
			state.subTotal = 0;
			state.checkoutSummary = {
				subtotal: 0,
				shippingCharge: 0,
				total: 0,
				discount: 0,
				payableTotal: 0,
			};
		},
	},
});

export const { toggleDrawer, addToCart, removeFromCart, resetCart } =
	cartSlice.actions;

export default cartSlice.reducer;

const checkoutSummaryCalc = (state: InitialStateInterFace) => {
	state.checkoutSummary.subtotal = state.subTotal;

	// set shipping charge
	if (state.cart.length > 0) {
		state.checkoutSummary.shippingCharge = 50;
	} else {
		state.checkoutSummary.shippingCharge = 0;
	}

	// discount generate
	let randomDiscount: number = Number(
		(Math.random() * (0.4 - 0.1) + 0.1).toFixed(1)
	);

	let discountAmount: number = 0;

	if (state.subTotal >= 1000) {
		state.checkoutSummary.discount = randomDiscount * 100; // discount in percent ex: 20 mean 20%
		discountAmount = state.subTotal * randomDiscount;

		// total calculation
		state.checkoutSummary.total =
			state.checkoutSummary.subtotal -
			discountAmount +
			state.checkoutSummary.shippingCharge;

		// payable total
		state.checkoutSummary.payableTotal = state.checkoutSummary.total;
	} else {
		// total
		state.checkoutSummary.total =
			state.checkoutSummary.subtotal + state.checkoutSummary.shippingCharge;
		// payable total
		state.checkoutSummary.payableTotal = state.checkoutSummary.total;
		// discount
		state.checkoutSummary.discount = 0;
	}
};
