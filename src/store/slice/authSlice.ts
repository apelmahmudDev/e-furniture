import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
export interface AuthInterface {
	_id: string;
	first_name: string;
	last_name: string;
	phone: string;
	email: string;
	password: string;
	user_type: "user" | "admin";
	avatar: string;
	__v: number;
}
interface InitialStateInterFace {
	isAuthenticated: boolean;
	user: AuthInterface;
}

// state
const initialState: InitialStateInterFace = {
	isAuthenticated: false,
	user: {} as AuthInterface,
};

// slice
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<AuthInterface>) => {
			state.user = action.payload;
			if (state.user._id) {
				state.isAuthenticated = true;
			}
		},
	},
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
