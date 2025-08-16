import { apiClient } from './api-client';

export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	thumbnail: string;
	images: string[];
	rating: number;
}

export interface ProductList {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

export const productService = {
	getFeatured: () =>
		apiClient.get<ProductList>('/products', {
			limit: 6,
			sortBy: 'rating',
			order: 'desc',
		}),
	getAll: (limit = 10, skip = 0) =>
		apiClient.get<ProductList>('/products', {
			skip,
			limit,
		}),
	search: (q?: string) =>
		apiClient.get<ProductList>('/products/search', {
			q,
			limit: 8,
		}),
	getById: (id: number) => apiClient.get<Product>(`/products/${id}`),
};
