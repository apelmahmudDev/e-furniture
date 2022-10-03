import {
	OrderApiInterface,
	OrderGetApiInterface,
} from "../../types/order/order.type";
import { baseApiSlice } from "./api.base";

export const orderApi = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOrders: builder.query<OrderGetApiInterface, void>({
			query: () => "/orders",
			providesTags: ["Order"],
		}),

		createOrder: builder.mutation<OrderApiInterface, OrderApiInterface>({
			query: (body) => ({
				url: `/order`,
				method: "POST",
				body,
			}),
		}),

		deleteOrder: builder.mutation<void, string>({
			query: (id) => ({
				url: `/order/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Order"],
		}),
	}),
});

export const {
	useGetOrdersQuery,
	useCreateOrderMutation,
	useDeleteOrderMutation,
} = orderApi;
