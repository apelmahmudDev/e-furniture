import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { AddressInterface } from "../../types/shipping/address.type";
import { SummaryInterface } from "../../types/shipping/checkoutSummary.type";
import { ProductInterface } from "./cartSlice";

interface InitialState {
	shippingAddress: AddressInterface;
	checkoutSummary: SummaryInterface;
	paymentMethod: string;
	cart: ProductInterface[];
	status: "Pending" | "Done" | "Cancel";
}

const initialState: InitialState = {
	shippingAddress: {
		name: "",
		email: "",
		phone: "",
		country: "",
		district: "",
		area: "",
		postCode: "",
		address: "",
	},
	checkoutSummary: {
		subtotal: 0,
		shippingCharge: 0,
		total: 0,
		discount: 0,
		payableTotal: 0,
	},
	paymentMethod: "Cash on Delevery",
	cart: [],
	status: "Pending",
};

export const shippingSlice = createSlice({
	name: "shipping",
	initialState,
	reducers: {
		updateShippingForm: (
			state,
			action: PayloadAction<{ field: string; value: string }>
		) => {
			state.shippingAddress = {
				...state.shippingAddress,
				[action.payload.field]: action.payload.value,
			};
		},

		updatePaymentMethod: (state, action: PayloadAction<string>) => {
			state.paymentMethod = action.payload;
		},

		setShippingCart: (state, action: PayloadAction<ProductInterface[]>) => {
			state.cart = action.payload;
		},

		setShippingSummary: (state, action: PayloadAction<SummaryInterface>) => {
			state.checkoutSummary = action.payload;
		},

		resetShipping: (state) => {
			state.shippingAddress = initialState.shippingAddress;
			state.checkoutSummary = initialState.checkoutSummary;
			state.paymentMethod = initialState.paymentMethod;
			state.cart = initialState.cart;
			state.status = initialState.status;
		},
	},
});

export const {
	updateShippingForm,
	updatePaymentMethod,
	setShippingCart,
	setShippingSummary,
	resetShipping,
} = shippingSlice.actions;

export default shippingSlice.reducer;
