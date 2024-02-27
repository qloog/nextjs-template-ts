import React from "react";
import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Bespoke Training",
		description:
			"Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
		icon: CloudArrowUpIcon
	},
	{
		name: "Tailored Nutrition",
		description:
			"Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
		icon: LockClosedIcon
	},
	{
		name: "Supplementation & PED Advice",
		description:
			"Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
		icon: ArrowPathIcon
	},
	{
		name: "Lifestyle & Bodybuilding",
		description:
			"Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
		icon: FingerPrintIcon
	}
];

export default function Example() {
	return (
		<div className="bg-white text-base-content/80 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-[#fd5f1e]">
						Ignite your potential
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
						Transform your physique and mindset.
					</p>
					<p className="mt-6 text-lg leading-8 ">
						Team Ignite are both a coaching service and community
						with the mission of helping you to realise your true
						physical and mental potential. Our mission is to bring
						together as many like minded individuals as possible,
						with a shared passion for progression - in and outside
						of the gym.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 ">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fd5f1e]">
										<feature.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 ">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
