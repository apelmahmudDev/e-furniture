import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	OrderApiInterface,
	OrderGetApiInterface,
} from "../../types/order/order.type";

export const orderApi = createApi({
	reducerPath: "orderApi",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	endpoints: (builder) => ({
		getOrders: builder.query<OrderGetApiInterface, void>({
			// OrderGetApiInterface =  means that, what kinds of data comes from db / other server
			// void = means that there is no data going to be passed
			query: () => `/orders`,
		}),
		createOrder: builder.mutation<OrderApiInterface, OrderApiInterface>({
			query: (body) => ({
				url: `/order`,
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;
