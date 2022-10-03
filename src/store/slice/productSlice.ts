import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
	category: string;
	description: string;
	image: string;
	name: string;
	price: number | string;
	_id: string;
}

interface InitialState {
	product_details_open: boolean;
	product: IProduct;
}

const initialState: InitialState = {
	product_details_open: false,
	product: {} as IProduct,
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		handleProductDetailsModal: (
			state: InitialState,
			action: PayloadAction<boolean>
		) => {
			state.product_details_open = action.payload;
		},
		setProductToViewOnModal: (
			state: InitialState,
			action: PayloadAction<IProduct>
		) => {
			const product = action.payload;
			state.product = { ...product };
		},
	},
});

export const { handleProductDetailsModal, setProductToViewOnModal } =
	productSlice.actions;

export default productSlice.reducer;
