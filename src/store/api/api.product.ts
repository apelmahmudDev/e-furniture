import { ProductInterface } from "../../types/product.types";
import { baseApiSlice } from "./api.base";

export const productApi = baseApiSlice.injectEndpoints({
	// tagTypes: ["Product"],
	endpoints: (builder) => ({
		getProducts: builder.query<ProductInterface, void>({
			query: () => `/products`,
			// providesTags: ["Product"],
		}),
		getFilteredProducts: builder.query<ProductInterface, { category: string }>({
			query: ({ category }) => ({
				url: `/products/filter/${category}`,
			}),
			// providesTags: ["Product"],
		}),
		addProducts: builder.mutation<any, any>({
			query: (body) => ({
				url: `/products`,
				method: "POST",
				body,
			}),
			// invalidatesTags: ["Product"],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useAddProductsMutation,
	useGetFilteredProductsQuery,
} = productApi;
