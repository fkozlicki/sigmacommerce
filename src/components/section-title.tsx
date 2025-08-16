export default function SectionTitle({ text }: { text: string }) {
	return (
		<div className="px-4 pt-4 pb-3">
			<h2 className="font-bold text-[22px] leading-[28px]">{text}</h2>
		</div>
	);
}
