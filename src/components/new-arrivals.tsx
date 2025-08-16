import { Suspense } from 'react';
import AllProducts from './all-products';
import SectionTitle from './section-title';
import ProductsGridSkeleton from './products-grid-skeleton';

export default function NewArrivals() {
	return (
		<section>
			<SectionTitle text="New Arrivals" />
			<Suspense fallback={<ProductsGridSkeleton />}>
				<AllProducts />
			</Suspense>
		</section>
	);
}
