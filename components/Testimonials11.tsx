"use client";

import { JSX, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";

// Use this object to add an icon to the testimonial (optional) like the Product Hunt logo for instance.
// Only change the values if you add more referrings sites (currently Twitter & Product Hunt)
const refTypes: {
	productHunt: {
		id: string;
		ariaLabel: string;
		svg: JSX.Element;
	};
	twitter: {
		id: string;
		ariaLabel: string;
		svg: JSX.Element;
	};
	video: {
		id: string;
		ariaLabel?: null;
		svg?: null;
	};
	other: { id: string; ariaLabel?: null; svg?: null };
} = {
	productHunt: {
		id: "product_hunt",
		ariaLabel: "See user review on Product Hunt",
		svg: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 26.245 26.256"
				className="w-[18px] h-[18px]">
				<path
					d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
					fill="#da552f"
				/>
				<path
					d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
					fill="#fff"
				/>
			</svg>
		)
	},
	twitter: {
		id: "twitter",
		ariaLabel: "See user post on Twitter",
		svg: (
			<svg
				className="w-5 h-5 fill-[#00aCee]"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24">
				<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
			</svg>
		)
	},
	video: {
		id: "video"
	},
	other: { id: "other" }
};

// The list of your testimonials. It needs 11 items to fill the grid. The last one (11th) is featured on large devices (span 2 columns + big font)
const list: {
	username?: string;
	name: string;
	text: string;
	type?: (typeof refTypes)[keyof typeof refTypes];
	link?: string;
	img?: string | StaticImageData;
	videoPoster?: string;
	videoSrc?: string;
	videoWidth?: number;
	videoHeight?: number;
	videoType?: "video/ogg" | "video/mp4" | "video/webm";
}[] = [
	{
		// Show @username for social media like Twitter. Does not link anywhere but cool to display

		name: "Darragh O'Donnell",
		text: "Couldn't ask for anything more from a coach. From day 1 the level of detail was insane. I always thought of online coaching as just getting a training plan and a meal plan with a few words of motivation here and there but it was way more than that with Team Ignite. No stone was left unturned.",
		// use refTypes.other if you don't want to display an icon
		type: refTypes.other
		// Link to the person's testimonial. It's more trustable

		// A statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided

		// You can display video testimonials to build more trust. Just swap the type above to "video" and add at least the video source below
		// videoSrc: "/jack.mp4"
	},
	{
		name: "Conor",
		text: "Absolutely 10/10, really enjoy it. Whenever we are in contact always get a sense that they care about things on a personal level not just another number",
		type: refTypes.other
	},
	{
		name: "Niall2",
		text: "I've made a lot more progress than I thought possible",
		videoPoster: "https://d2w9s4dnpv2fpb.cloudfront.net/olanvidpic.webp",
		videoSrc: "https://d2w9s4dnpv2fpb.cloudfront.net/olanvid.webm",
		videoHeight: 960,
		videoWidth: 1600,
		type: refTypes.video
	},
	{
		name: "Graham",
		text: "It's a 5 star service. They're extremely detail orientated. Very client focused. There's no ego. As stated previously I signed up initially for 12 weeks. Nearly a year later and I'm still with them. That in itself should tell its own story. I couldn't recommend Team Ignite highly enough its been one of the best decisions I've ever made",
		type: refTypes.other
	},
	{
		name: "Sean Reynolds",
		text: "Joining the gym with Team Ignite has been life changing, in just 7 months, I'm closing in on 20kg weights loss and my body composition has completely changed. Their service is so affordable and worth everything penny spent and I couldn't recommend tehm more!",
		type: refTypes.other
	},
	{
		name: "Ryan O'Riordan",
		text: "Overall with Team Ignite, I made very good progress in terms of dropping a sincere amount on the scale, aswell as feeling 100% better. They have ensured that not only do I look better, but I feel alot better too. They was available 24/7 and I was never left waiting for a reply. They are also very patient and attentive, ensuring that I maintained proper form and avoided any injuries. Their positive and encouraging attitude made every training session more enjoyable and empowering.",
		type: refTypes.other
	},
	{
		name: "Ciara Grogan",
		text: "I've gained so much knowledge on health, wellbeing, nutrition & training over the last few weeks. Nothing is too much to ask for and every check-in feedback was positive & motivating. I can't thank Darragh enough for helping me get back on track!",
		type: refTypes.other
	},
	{
		name: "Niall",
		text: "I've made a lot more progress than I ever thought possible",
		videoPoster: "https://d2w9s4dnpv2fpb.cloudfront.net/olanvidpic.webp",
		videoSrc: "https://d2w9s4dnpv2fpb.cloudfront.net/olanvid.webm",
		videoHeight: 960,
		videoWidth: 1600,
		type: refTypes.video
	},
	{
		name: "Mark Kehoe",
		text: "I'd advise anyone looking to take their training seriously to work with Darragh as he'll provide the guidance and knowledge that you'll need to get that extra level, while making sure you're being consistent and following the plan.",
		type: refTypes.other
	},
	{
		name: "Niall0",
		text: "I've made a lot more progress than I ethought possible",
		videoPoster: "https://d2w9s4dnpv2fpb.cloudfront.net/olanvidpic.webp",
		videoSrc: "https://d2w9s4dnpv2fpb.cloudfront.net/olanvid.webm",
		videoHeight: 960,
		videoWidth: 1600,
		type: refTypes.video
	},
	// The last testimonial is featured on big devices (span 2 columns + big font) 👇
	{
		name: "Dáire",
		text: "I had an extremely positive experience working with Team Ignite. I honestly don't think it could have gone better. Even smalls things they did which made the experience so good was basically being available 24/7. Any question no matter how small or big they are always willing to help and you possess a real positivity regarding the process which made me feel more comfortable and confident in what we were doing and trying to achieve.",
		type: refTypes.other
	}
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }: { i: number }) => {
	const testimonial = list[i];

	if (!testimonial) return null;

	if (testimonial.type === refTypes.video) {
		return <VideoTestimonial i={i} />;
	}

	return (
		<li key={i}>
			<figure className="relative h-full p-6 bg-base-200 rounded-lg">
				<blockquote className="relative">
					<p className="text-sm text-base-content/80">
						{testimonial.text}
					</p>
				</blockquote>
				<figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
					<div className="overflow-hidden rounded-full bg-base-300 shrink-0">
						{testimonial.img ? (
							<Image
								className="w-10 h-10 rounded-full object-cover"
								src={list[i].img}
								alt={`${list[i].name}'s testimonial for ${config.appName}`}
								width={48}
								height={48}
							/>
						) : (
							<span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
								{testimonial.name.charAt(0)}
							</span>
						)}
					</div>
					<div className="w-full flex items-end justify-between gap-2">
						<div>
							<div className="text-sm font-medium text-base-content">
								{testimonial.name}
							</div>
							{testimonial.username && (
								<div className="mt-0.5 text-sm text-base-content/80">
									@{testimonial.username}
								</div>
							)}
						</div>

						{testimonial.link && testimonial.type?.svg && (
							<a
								href={testimonial.link}
								target="_blank"
								className="shrink-0 "
								aria-label={testimonial.type?.ariaLabel}>
								{testimonial.type?.svg}
							</a>
						)}
					</div>
				</figcaption>
			</figure>
		</li>
	);
};

// A video tesionial to build trust. 2 or 3 on a wall of love is perfect.
const VideoTestimonial = ({ i }: { i: number }) => {
	const vidRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (vidRef.current?.readyState != 0) {
			setIsLoading(false);
		}
	}, [vidRef?.current?.readyState]);

	const handlePlayVideo = () => {
		if (isPlaying) {
			vidRef.current.pause();
			setIsPlaying(false);
		} else {
			vidRef.current.play();
			setIsPlaying(true);

			if (vidRef.current?.readyState === 0) setIsLoading(true);
		}
	};

	const testimonial = list[i];

	if (!testimonial) return null;

	return (
		<li
			key={i}
			className="break-inside-avoid max-md:flex justify-center bg-base-200 rounded-lg overflow-hidden flex flex-col">
			<div className="relative w-full">
				{isLoading && (
					<span className="z-40 !h-24 !w-24 !bg-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-ring"></span>
				)}
				<video
					className="w-full"
					ref={vidRef}
					poster={testimonial.videoPoster}
					preload="metadata"
					playsInline
					width={testimonial.videoWidth}
					height={testimonial.videoHeight}
					onLoadedData={() => {
						console.log("Video is loaded!");
						setIsLoading(false);
					}}>
					<source
						src={testimonial.videoSrc}
						type={testimonial.videoType || "video/mp4"}
					/>
					Your browser does not support the videos
				</video>

				{!isPlaying && (
					<div className="absolute bottom-0 -inset-x-4 bg-gray-900/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
				)}

				<div className="absolute w-full bottom-0 z-20">
					<div className="flex justify-between items-end p-4">
						<button
							className="group cursor-pointer"
							type="button"
							title="Play video"
							aria-label="Play video"
							onClick={handlePlayVideo}>
							{isPlaying ? (
								// PAUSE
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className=" w-14 h-14 fill-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
									<path
										fillRule="evenodd"
										d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								// PLAY
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-14 h-14 fill-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity">
									<path
										fillRule="evenodd"
										d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
										clipRule="evenodd"
									/>
								</svg>
							)}
						</button>

						{!isPlaying && (
							<div className="animate-opacity text-right">
								<p className="text-gray-50 font-medium drop-shadow">
									{testimonial.name}
								</p>
								<div className="rating">
									{[...Array(5)].map((_, i) => (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-5 h-5 text-yellow-500 drop-shadow"
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
						)}
					</div>
				</div>
			</div>

			<div className="relative z-20 bg-base-200 text-base-content/80 text-base leading-tight p-4 select-none">
				<p className="text-sm text-base-content/80">
					&quot;{testimonial.text}&quot;
				</p>
			</div>
		</li>
	);
};

const Testimonials11 = () => {
	return (
		<section className="bg-white text-base-content/80" id="testimonials">
			<div className="py-24 px-8 max-w-7xl mx-auto">
				<div className="flex flex-col text-center w-full mb-8">
					<h2 className="text-5xl font-extrabold text-base-content/80 bebas uppercase">
						300+ physiques transformed!
					</h2>
				</div>

				<ul
					role="list"
					className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
					<li>
						<ul
							role="list"
							className="flex flex-col gap-y-6 sm:gap-y-8">
							{[...Array(3)].map((e, i) => (
								<Testimonial key={i} i={i} />
							))}
						</ul>
					</li>

					<li className="hidden md:grid order-none md:order-first lg:order-none col-span-2 grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						{/* BIG FEATURED TESTIMONIAL — THE LAST ONE IN THE LIST (11th) */}
						<ul className="col-span-2">
							<li>
								<figure className="relative h-full p-6 bg-base-200 rounded-lg">
									<blockquote className="relative p-4">
										<p className="text-sm font-base text-base-content/80">
											{list[list.length - 1].text}
										</p>
									</blockquote>
									<figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
										<div className="overflow-hidden rounded-full bg-base-300 shrink-0">
											{list[list.length - 1].img ? (
												<Image
													className="w-12 h-12 rounded-full object-cover"
													src={
														list[list.length - 1]
															.img
													}
													alt={`${
														list[list.length - 1]
															.name
													}'s testimonial for ${
														config.appName
													}`}
													width={48}
													height={48}
												/>
											) : (
												<span className="w-12 h-12 rounded-full flex justify-center items-center text-xl font-medium bg-base-300">
													{list[
														list.length - 1
													].name.charAt(0)}
												</span>
											)}
										</div>
										<div>
											<div className="text-base font-medium text-base-content">
												{list[list.length - 1].name}
											</div>
											{list[list.length - 1].username && (
												<div className="mt-1 text-base text-base-content/80">
													@
													{
														list[list.length - 1]
															.username
													}
												</div>
											)}
										</div>
									</figcaption>
								</figure>
							</li>
						</ul>
						<ul
							role="list"
							className="flex flex-col gap-y-6 sm:gap-y-8">
							{[...Array(2)].map((e, i) => (
								<Testimonial key={i} i={i + 3} />
							))}
						</ul>
						<ul
							role="list"
							className="flex flex-col gap-y-6 sm:gap-y-8">
							{[...Array(2)].map((e, i) => (
								<Testimonial key={i} i={i + 5} />
							))}
						</ul>
					</li>
					<li>
						<ul
							role="list"
							className="flex flex-col gap-y-6 sm:gap-y-8">
							{[...Array(3)].map((e, i) => (
								<Testimonial key={i} i={i + 7} />
							))}
						</ul>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Testimonials11;
