import { productService } from '@/services/products';
import ProductsGrid from './products-grid';
import FetchError from './fetch-error';

export default async function FeaturedProducts() {
	const { data } = await productService.getFeatured();

	if (!data) {
		return <FetchError />;
	}
	return <ProductsGrid products={data.products} />;
}
