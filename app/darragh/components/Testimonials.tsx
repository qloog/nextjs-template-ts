import Image from "next/image";
import { StaticImageData } from "next/image";
import dmac from "@/public/dmac.webp";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.
const list: {
	username?: string;
	name: string;
	text: string;
	img?: string | StaticImageData;
}[] = [
	{
		// Optional, use for social media like Twitter. Does not link anywhere but cool to display

		// REQUIRED
		name: "Darragh O'Donnell",
		// REQUIRED
		text: "Couldn't ask for anything more from Darragh as a coach. From day 1 the level of detail was insane. I always thought of online coaching as just getting a training plan and a meal plan with a few words of motivation here and there but it was way more than that with Darragh. No stone was left unturned."
		// Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
	},
	{
		name: "Ciara Grogan",
		text: "I've gained so much knowledge on health, wellbeing, nutrition & training over the last few weeks. Nothing is too much to ask for and every check-in feedback was positive & motivating. I can't thank Darragh enough for helping me get back on track!"
	},
	{
		name: "Mark Kehoe",
		text: "I'd advise anyone looking to take their training seriously to work with Darragh as he'll provide the guidance and knowledge that you'll need to get that extra level, while making sure you're being consistent and following the plan."
	}
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }: { i: number }) => {
	const testimonial = list[i];

	if (!testimonial) return null;

	return (
		<li key={i}>
			<figure className="relative w-full h-full p-6 md:p-10 bg-gray-100 rounded-lg max-md:text-sm flex flex-col">
				<blockquote className="relative flex-1">
					<p className="text-base-content/80 leading-relaxed text-base">
						{testimonial.text}
					</p>
				</blockquote>
				<figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
					<div className="w-full flex items-center justify-between gap-2">
						<div>
							<div className="font-bold text-base-content/80 md:mb-0.5">
								{testimonial.name}
							</div>
							{testimonial.username && (
								<div className="mt-0.5 text-sm text-base-content/80 mb-2">
									{testimonial.username}
								</div>
							)}
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
							{testimonial.img ? (
								<Image
									className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
									src={list[i].img}
									alt={`${list[i].name}'s testimonial for ${config.appName}`}
									width={48}
									height={48}
								/>
							) : (
								<span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
									{testimonial.name.charAt(0)}
								</span>
							)}
						</div>
					</div>
				</figcaption>
			</figure>
		</li>
	);
};

const Testimonials3 = () => {
	return (
		<section id="testimonials">
			<div className="pt-16 px-8 max-w-7xl w-full mx-auto flex flex-col justify-start text-base-content/80">
				<h2 className="font-extrabold text-5xl tracking-tight text-center mb-8">
					What Our Clients Say
				</h2>
				<ul
					role="list"
					className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-3"></div>
					{[...Array(3)].map((e, i) => (
						<Testimonial key={i} i={i} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Testimonials3;
