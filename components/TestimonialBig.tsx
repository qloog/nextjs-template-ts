import Image from "next/image";
import coaching1 from "@/public/coaching1.webp";

export default function TestimonialBig({
	name,
	text,
	img
}: {
	name: string;
	text: string;
	img: any;
}) {
	return (
		<div className="w-full bg-white text-base-content/80 flex flex-col items-center">
			<div className="pt-8 px-8 max-w-7xl flex flex-col items-center">
				<div className="bg-base-200 rounded-lg flex flex-col lg:flex-row justify-start overflow-hidden">
					<Image
						className="object-cover w-full h-full"
						src={img}
						alt={`${name}'s transformation`}
						width={400}
						height={400}
					/>
					<div className="flex flex-col items-start justify-between w-full p-8">
						<p className="text-base-content/80 leading-relaxed text-sm h-full">
							{text}
						</p>
						<figcaption className="w-full flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
							<div className="w-full flex items-center justify-between gap-2">
								<div>
									<div className="font-bold text-base-content/80 md:mb-0.5">
										{name}
									</div>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="w-5 h-5 text-yellow-500"
												key={i}>
												<path
													fillRule="evenodd"
													d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
													clipRule="evenodd"
												/>
											</svg>
										))}
									</div>
								</div>
								<div className="overflow-hidden rounded-full bg-base-300 shrink-0">
									<span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
										{name.charAt(0)}
									</span>
								</div>
							</div>
						</figcaption>
					</div>
				</div>
			</div>
		</div>
	);
}
