import ProductPreviewSkeleton from './product-preview-skeleton';

export default function SearchProductsSkeleton() {
	return (
		<div className="p-1">
			{Array.from({ length: 4 }).map((_, index) => (
				<ProductPreviewSkeleton key={index} />
			))}
		</div>
	);
}
