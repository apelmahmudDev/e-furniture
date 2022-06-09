import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginUser } from "../../views/pages/auth/Login";
import { User } from "../../views/pages/auth/SignUp";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
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
