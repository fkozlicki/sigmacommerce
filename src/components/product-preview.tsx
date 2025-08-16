import Link from 'next/link';
import { CommandItem } from './ui/command';
import Image from 'next/image';
import { Product } from '@/services/products';

export default function ProductPreview({
	id,
	title,
	thumbnail,
	price,
}: Product) {
	return (
		<CommandItem asChild>
			<Link href={`/products/${id}`}>
				<div className="flex gap-2 items-center">
					<Image
						src={thumbnail}
						alt={title}
						width={36}
						height={36}
						className="bg-accent rounded"
					/>
					<div>
						<p>{title}</p>
						<p className="text-xs text-secondary-foreground">${price}</p>
					</div>
				</div>
			</Link>
		</CommandItem>
	);
}
