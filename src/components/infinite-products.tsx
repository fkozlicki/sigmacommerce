'use client';

import { useInfiniteProducts } from '@/hooks/use-infinite-products';
import { Product } from '@/services/products';
import { LoaderIcon } from 'lucide-react';
import ProductsGrid from './products-grid';
import ProductsGridSkeleton from './products-grid-skeleton';
import { Button } from './ui/button';

interface InfiniteProductsProps {
	initialProducts: Product[];
	perPage: number;
}

export default function InfiniteProducts({
	initialProducts,
	perPage,
}: InfiniteProductsProps) {
	const { isLoading, loadMore, products } = useInfiniteProducts(
		initialProducts,
		perPage
	);

	return (
		<div className="space-y-3">
			<ProductsGrid products={products} />
			{isLoading && <ProductsGridSkeleton />}
			<div className="py-4 flex justify-center">
				<Button onClick={loadMore} disabled={isLoading} className="w-28">
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
