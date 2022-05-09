import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slice/counterSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
	reducer: {
		counter: CounterReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;

export default store;
