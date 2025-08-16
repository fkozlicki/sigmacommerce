'use client';

import { useSearchProducts } from '@/hooks/use-search-products';
import { SearchIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductPreview from './product-preview';
import { Button } from './ui/button';
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandList,
} from './ui/command';
import SearchProductsSkeleton from './search-products-skeleton';

export default function SearchProducts() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const { products, isLoading } = useSearchProducts(query);
	const pathname = usePathname();

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				variant="secondary"
				className="justify-start lg:hidden"
			>
				<SearchIcon className="size-4" />
				Search for products
			</Button>
			<Button
				onClick={() => setOpen(true)}
				variant="secondary"
				size="lg"
				className="w-[248px] justify-start hidden lg:inline-flex"
			>
				<SearchIcon className="size-6" />
				Search for products
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<Command shouldFilter={false}>
					<CommandInput
						placeholder="Search for products..."
						value={query}
						onValueChange={setQuery}
					/>
					<CommandList>
						{isLoading ? (
							<SearchProductsSkeleton />
						) : products.length > 0 ? (
							<CommandGroup heading="Products">
								{products.map((product) => (
									<ProductPreview key={product.id} {...product} />
								))}
							</CommandGroup>
						) : (
							<CommandEmpty>No products found.</CommandEmpty>
						)}
					</CommandList>
				</Command>
			</CommandDialog>
		</>
	);
}
