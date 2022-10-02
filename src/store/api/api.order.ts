import {
	OrderApiInterface,
	OrderGetApiInterface,
} from "../../types/order/order.type";
import { baseApiSlice } from "./api.base";

export const orderApi = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOrders: builder.query<OrderGetApiInterface, void>({
			query: () => "/orders",
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
