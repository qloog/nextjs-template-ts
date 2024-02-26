import Image from "next/image";
import { StaticImageData } from "next/image";
import olan from "@/public/olan.webp";
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
		username: "CamBro Conversations - Top 1% Podcast",
		// REQUIRED
		name: "Colin Campbell",
		// REQUIRED
		text: "I have made significant improvements to the aesthetics of the promotional material for my podcast. A good episode only becomes great with supporting thumbnails, artwork, and clips. The work Darren and the team do in this space has helped me level up and continue growing my podcast into the top 1% globally.",
		// Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
		img: olan
	},
	{
		username: "MyWallSt - Chief Operating Officer",
		name: "John Smyth",
		text: "I've been totally blown away by the work of Voics so far, from the first day when we met Darren I knew we were on the right track. I knew going in that he knew so much about podcasts but what I've loved is his methodical approach to it, and his flexibility and wiliness to share what works with us. One of the best ever agencies I've worked with in my 16/17 years of work.",
		img: olan
	},
	{
		username: "The LifeTech Show",
		name: "Evangelina Rajendran",
		text: "Great content was given alongside feedback that helped me to navigate in the correct direction. Voics has given me a new perspective towards podcasting as a whole and given me great insights on improving the quality of my podcast channel.",
		img: olan
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
					<p className="text-base-content/80 leading-relaxed text-sm">
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
			<div className="py-16 px-8 max-w-7xl w-full mx-auto flex flex-col justify-start">
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
