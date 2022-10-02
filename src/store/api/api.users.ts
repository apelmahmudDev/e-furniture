import { LoginUser } from "../../views/pages/auth/Login";
import { User } from "../../views/pages/auth/SignUp";
import { baseApiSlice } from "./api.base";

export const usersApi = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<User, User>({
			query: (body) => ({
				url: `/sign-up`,
				method: "POST",
				body,
			}),
		}),
		login: builder.mutation<any, LoginUser>({
			query: (body) => ({
				url: "/login",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useSignUpMutation, useLoginMutation } = usersApi;
