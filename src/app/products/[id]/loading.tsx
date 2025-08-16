import { Skeleton } from '@/components/ui/skeleton';

export default function loading() {
	return (
		<main className="p-5 max-w-[600px] lg:max-w-5xl mx-auto">
			<div className="flex gap-8 flex-col lg:flex-row">
				<Skeleton className="size-full max-w-[600px] aspect-square rounded-lg animate-pulse" />
				<div className="flex flex-col justify-between flex-1">
					<div>
						<Skeleton className="w-full max-w-[300px] h-9 animate-pulse mb-2 rounded" />
						<Skeleton className="w-[80px] h-7 animate-pulse mb-8 rounded" />
						<Skeleton className="w-full h-16 animate-pulse rounded" />
					</div>
					<Skeleton className="h-9 rounded-md animate-pulse w-full" />
				</div>
			</div>
		</main>
	);
}
