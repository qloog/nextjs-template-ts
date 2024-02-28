"use client";

import { InlineWidget } from "react-calendly";

export default function Call() {
	return (
		<div
			id="call"
			className="w-full flex flex-col items-center bg-white text-base-content/80 px-8 py-16 overflow-hidden">
			<div className="w-full max-w-7xl flex flex-col items-center justify-start">
				<h1 className="font-extrabold text-4xl bebas uppercase text-center mb-6">
					Book a call
				</h1>
				<div className="w-full xl:w-[600px] border-2">
					<InlineWidget url="https://calendly.com/olanbroderickcoaching/30min" />
				</div>
			</div>
		</div>
	);
}
