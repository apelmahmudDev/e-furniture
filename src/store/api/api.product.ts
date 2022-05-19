import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductInterface } from "../../types/product.types";

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	endpoints: (builder) => ({
		getProducts: builder.query<ProductInterface, void>({
			query: () => `/products`,
		}),
		addProducts: builder.mutation<ProductInterface, void>({
			query: (body) => ({
				url: `/products`,
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useGetProductsQuery, useAddProductsMutation } = productApi;
