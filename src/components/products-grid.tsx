import { Product } from '@/services/products';
import ProductCard from './product-card';

interface ProductsGridProps {
	products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-5 px-4">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}
