import { Product, productService } from '@/services/products';
import { useState } from 'react';

export function useInfiniteProducts(
	initialProducts: Product[],
	perPage: number
) {
	const [products, setProducts] = useState<Product[]>(initialProducts);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	async function loadMore() {
		setIsLoading(true);

		const { data } = await productService.getAll(perPage, page * perPage);

		if (data) {
			setProducts((prev) => [...prev, ...data.products]);
			setPage((prev) => prev + 1);
		}

		setIsLoading(false);
	}

	return {
		products,
		isLoading,
		loadMore,
	};
}
