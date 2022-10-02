// slice
import { baseApiSlice } from "./api/api.base";
import { configureStore } from "@reduxjs/toolkit";
import GlobalReducer from "./slice/globalSlice";
import CounterReducer from "./slice/counterSlice";
import ProductReducer from "./slice/productSlice";
import CartReducer from "./slice/cartSlice";
import wishlistReducer from "./slice/wishlistSlice";
import authReducer from "./slice/authSlice";
import shippingReducer from "./slice/shippingSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
	reducer: {
		[baseApiSlice.reducerPath]: baseApiSlice.reducer,

		// slices
		global: GlobalReducer,
		counter: CounterReducer,
		product: ProductReducer,
		cart: CartReducer,
		wishlist: wishlistReducer,
		auth: authReducer,
		shipping: shippingReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;

export default store;
