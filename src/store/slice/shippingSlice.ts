import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { AddressInterface } from "../../types/shipping/address.type";
import { SummaryInterface } from "../../types/shipping/checkoutSummary.type";
import { MethodType } from "../../types/shipping/paymentMethod.type";
import { ProductInterface } from "./cartSlice";

interface InitialState {
	shippingAddress: AddressInterface;
	checkoutSummary: SummaryInterface;
	paymentMethod: MethodType;
	cart: ProductInterface[];
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
		payableTotal: 0,
	},
	paymentMethod: "cash_on_delevery",
	cart: [],
};

export const shippingSlice = createSlice({
	name: "shipping",
	initialState,
	reducers: {
		updateShippingForm: (state, action: PayloadAction<AddressInterface>) => {},
	},
});

export const { updateShippingForm } = shippingSlice.actions;

export default shippingSlice.reducer;
