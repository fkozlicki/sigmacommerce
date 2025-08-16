import { Suspense } from 'react';
import FeaturedProducts from './featured-products';
import SectionTitle from './section-title';
import ProductsGridSkeleton from './products-grid-skeleton';

export default async function Featured() {
	return (
		<section>
			<SectionTitle text="Featured products" />
			<Suspense fallback={<ProductsGridSkeleton />}>
				<FeaturedProducts />
			</Suspense>
		</section>
	);
}
