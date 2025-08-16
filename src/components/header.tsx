import Link from 'next/link';
import Logo from './logo';
import SearchProducts from './search-products';

export default function Header() {
	return (
		<header className="h-24 border-b px-10 flex items-center justify-between">
			<Link href="/">
				<Logo />
			</Link>
			<SearchProducts />
		</header>
	);
}
