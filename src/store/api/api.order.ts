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

		getOrderByStatus: builder.query<OrderGetApiInterface, string>({
			query: (status) => `/order/${status}`,
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

		updateOrder: builder.mutation<
			void,
			{ id: string; body: { status: string } }
		>({
			query: ({ id, body }) => ({
				url: `/order/${id}`,
				method: "PUT",
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
	useUpdateOrderMutation,
	useGetOrderByStatusQuery,
} = orderApi;
