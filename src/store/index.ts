// slice
import { configureStore } from "@reduxjs/toolkit";
import GlobalReducer from "./slice/globalSlice";
import CounterReducer from "./slice/counterSlice";
import ProductReducer from "./slice/productSlice";
import CartReducer from "./slice/cartSlice";
import wishlistReducer from "./slice/wishlistSlice";
import authReducer from "./slice/authSlice";
import shippingReducer from "./slice/shippingSlice";

// api / services
import { useDispatch } from "react-redux";
import { productApi } from "./api/api.product";
import { usersApi } from "./api/api.users";

const store = configureStore({
	reducer: {
		// api / services
		[productApi.reducerPath]: productApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,

		// slice
		global: GlobalReducer,
		counter: CounterReducer,
		product: ProductReducer,
		cart: CartReducer,
		wishlist: wishlistReducer,
		auth: authReducer,
		shipping: shippingReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;

export default store;
