import { Product, productService } from '@/services/products';
import { useEffect, useState } from 'react';

export function useSearchProducts(q: string) {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	async function searchProducts(q: string) {
		setIsLoading(true);

		const { data } = await productService.search(q);

		if (data) {
			setProducts(data.products);
		}

		setIsLoading(false);
	}

	useEffect(() => {
		searchProducts(q);
	}, [q]);

	return { products, isLoading };
}
