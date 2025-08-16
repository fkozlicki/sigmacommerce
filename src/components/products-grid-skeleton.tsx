import ProductCardSkeleton from './product-card-skeleton';

export default function ProductsGridSkeleton() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-5 px-4">
			{Array.from({ length: 10 }).map((_, index) => (
				<ProductCardSkeleton key={index} />
			))}
		</div>
	);
}
