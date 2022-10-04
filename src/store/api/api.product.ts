import { ProductInterface } from "../../types/product.types";
import { baseApiSlice } from "./api.base";

export const productApi = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query<ProductInterface, void>({
			query: () => `/products`,
			providesTags: ["Products"],
		}),
		getFilteredProducts: builder.query<ProductInterface, { category: string }>({
			query: ({ category }) => ({
				url: `/products/filter/${category}`,
			}),
			providesTags: ["Products"],
		}),
		addProducts: builder.mutation<any, any>({
			query: (body) => ({
				url: `/products`,
				method: "POST",
				body,
			}),
			invalidatesTags: ["Products"],
		}),
		deleteProduct: builder.mutation<void, string>({
			query: (id) => ({
				url: `/products/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Products"],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useAddProductsMutation,
	useGetFilteredProductsQuery,
	useDeleteProductMutation,
} = productApi;
