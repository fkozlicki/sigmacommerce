import { Skeleton } from './ui/skeleton';

export default function ProductPreviewSkeleton() {
	return (
		<div className="px-2 py-1.5 rounded-sm flex gap-2">
			<Skeleton className="size-9 animate-pulse" />
			<div className="space-y-1">
				<Skeleton className="h-4 animate-pulse w-[300px]" />
				<Skeleton className="h-3 animate-pulse w-[80px]" />
			</div>
		</div>
	);
}
