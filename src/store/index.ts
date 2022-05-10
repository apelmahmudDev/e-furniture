import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slice/counterSlice";
import ProductReducer from "./slice/productSlice";
import CartReducer from "./slice/cartSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
	reducer: {
		counter: CounterReducer,
		product: ProductReducer,
		cart: CartReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;

export default store;
