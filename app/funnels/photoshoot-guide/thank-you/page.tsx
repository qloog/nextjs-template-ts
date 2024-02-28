import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<>
			<Header />
			<section className="bg-white">
				<div className="max-w-7xl mx-auto text-base-content/80 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 py-8 lg:py-20">
					<div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start mb-8">
						<h1 className="font-extrabold text-6xl bebas uppercase mb-6">
							Get Your Photoshoot Guide
						</h1>

						<p className="text-lg leading-relaxed">
							Thank you! Your guide is on the way.
						</p>
						<Link
							href="/"
							className="text-[#fd5f1e] font-bold underline mt-4">
							Back to homepage
						</Link>
					</div>
					<div className="w-full">
						<div className="relative pb-[56.25%] h-0">
							<iframe
								src="https://www.loom.com/embed/9a17fda271914caabb7ef75cf68d0fa3?sid=b4479370-d4fd-47c3-83d8-0228876e14ec"
								className="absolute top0 left-0 w-full h-full lg:pl-6"></iframe>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
