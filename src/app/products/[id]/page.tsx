import { Button } from '@/components/ui/button';
import { productService } from '@/services/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const { data } = await productService.getById(+id);

	if (!data) {
		return notFound();
	}

	const { thumbnail, title, description, price, images } = data;

	return (
		<main className="p-5 max-w-[600px] lg:max-w-5xl mx-auto">
			<div className="flex gap-8 flex-col lg:flex-row">
				<div className="basis-4/6 max-w-[600px] relative">
					<Image
						src={thumbnail}
						alt={title}
						width={600}
						height={600}
						className="bg-accent rounded-lg"
						priority
					/>
					{images.length > 1 && (
						<div className="flex justify-center gap-4 absolute bottom-4 left-1/2 -translate-x-1/2">
							{images.map((image, index) => (
								<Image
									key={`title-${index}`}
									src={image}
									alt={`${title} ${index}`}
									width={96}
									height={96}
									className="bg-accent rounded-md border"
								/>
							))}
						</div>
					)}
				</div>
				<div className="basis-2/6 flex-1 flex flex-col justify-between gap-10">
					<div>
						<p className="text-3xl font-bold mb-2">{title}</p>
						<p className="text-secondary-foreground text-xl mb-8">${price}</p>
						<p className="text-sm text-muted-foreground">{description}</p>
					</div>
					<Button>Add to cart</Button>
				</div>
			</div>
		</main>
	);
}
