import { Product } from '@/services/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ id, title, price, thumbnail }: Product) {
	return (
		<Link href={`/products/${id}`}>
			<div className="w-44 space-y-3">
				<Image
					src={thumbnail}
					alt={title}
					width={176}
					height={176}
					className="bg-accent rounded-xl"
					priority
				/>
				<div>
					<p className="font-medium">{title}</p>
					<p className="text-sm text-secondary-foreground">${price}</p>
				</div>
			</div>
		</Link>
	);
}
