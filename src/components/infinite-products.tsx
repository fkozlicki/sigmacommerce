'use client';

import { Product, productService } from '@/services/products';
import { useState } from 'react';
import ProductsGrid from './products-grid';
import { Button } from './ui/button';
import { LoaderIcon } from 'lucide-react';
import ProductsGridSkeleton from './products-grid-skeleton';

interface InfiniteProductsProps {
	initialProducts: Product[];
	perPage: number;
}

export default function InfiniteProducts({
	initialProducts,
	perPage,
}: InfiniteProductsProps) {
	const [products, setProducts] = useState(initialProducts);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	async function onClick() {
		setIsLoading(true);

		const { data } = await productService.getAll(perPage, page * perPage);

		if (data) {
			setProducts((prev) => [...prev, ...data.products]);
			setPage((prev) => prev + 1);
		}

		setIsLoading(false);
	}

	return (
		<div className="space-y-3">
			<ProductsGrid products={products} />
			{isLoading && <ProductsGridSkeleton />}
			<div className="py-4 flex justify-center">
				<Button onClick={onClick} disabled={isLoading} className="w-28">
					{isLoading ? (
						<LoaderIcon className="size-4 animate-spin" />
					) : (
						'Load more'
					)}
				</Button>
			</div>
		</div>
	);
}
