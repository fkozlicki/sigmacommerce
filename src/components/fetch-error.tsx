'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { LoaderIcon } from 'lucide-react';

export default function FetchError() {
	const [isLoading, setIsLoading] = useState(false);

	function onClick() {
		setIsLoading(true);
		window.location.reload();
	}

	return (
		<div className="p-4 grid place-content-center">
			<div className="grid place-items-center gap-2">
				<p className="text-lg text-muted-foreground font-medium">
					Sorry. We couldn&apos;t load your data.
				</p>
				<Button onClick={onClick} disabled={isLoading} className="min-w-24">
					{isLoading ? (
						<LoaderIcon className="size-4 animate-spin" />
					) : (
						'Try again'
					)}
				</Button>
			</div>
		</div>
	);
}
