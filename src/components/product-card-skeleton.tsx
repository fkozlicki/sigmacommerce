import { Skeleton } from './ui/skeleton';

export default function ProductCardSkeleton() {
	return (
		<div className="space-y-3">
			<Skeleton className="size-[176px] animate-pulse" />
			<div className="space-y-1">
				<Skeleton className="w-full h-5 animate-pulse" />
				<Skeleton className="w-full h-4 animate-pulse" />
			</div>
		</div>
	);
}
