import {
	OrderApiInterface,
	OrderGetApiInterface,
} from "../../types/order/order.type";
import { baseApiSlice } from "./api.base";

export const orderApi = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOrders: builder.query<OrderGetApiInterface, void>({
			query: () => "/orders",
			providesTags: ["Orders"],
		}),

		getOrdersByEmail: builder.query<OrderGetApiInterface, string>({
			query: (email) => `/orders/${email}`,
			providesTags: ["Orders"],
		}),

		createOrder: builder.mutation<OrderApiInterface, OrderApiInterface>({
			query: (body) => ({
				url: `/order`,
				method: "POST",
				body,
			}),
			invalidatesTags: ["Orders"],
		}),

		deleteOrder: builder.mutation<void, string>({
			query: (id) => ({
				url: `/order/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Orders"],
		}),
	}),
});

export const {
	useGetOrdersQuery,
	useGetOrdersByEmailQuery,
	useCreateOrderMutation,
	useDeleteOrderMutation,
} = orderApi;
