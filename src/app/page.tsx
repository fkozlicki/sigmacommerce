import Featured from '@/components/featured';
import NewArrivals from '@/components/new-arrivals';

export default function Home() {
	return (
		<main className="max-w-[396px] md:max-w-[772px] py-5 lg:max-w-[960px] mx-auto">
			<Featured />
			<NewArrivals />
		</main>
	);
}
