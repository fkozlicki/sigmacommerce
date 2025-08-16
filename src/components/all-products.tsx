import { productService } from '@/services/products';
import InfiniteProducts from './infinite-products';
import FetchError from './fetch-error';

export default async function AllProducts() {
	const { data } = await productService.getAll();

	if (!data) {
		return <FetchError />;
	}

	return <InfiniteProducts initialProducts={data.products} perPage={10} />;
}
