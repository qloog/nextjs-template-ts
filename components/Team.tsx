import React from "react";
import Image from "next/image";
import Link from "next/link";
import dmac from "@/public/dmac.webp";
import olan from "@/public/olan.webp";

export default function Team() {
	return (
		<>
			<section
				className="bg-white flex flex-col items-center py-16 px-8 "
				id="team">
				<div className="w-full max-w-7xl flex flex-col items-center">
					<h2 className="font-extrabold text-5xl tracking-tight text-center mb-8">
						Meet the Team
					</h2>

					<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
						<Link
							href="/darragh"
							className="relative overflow-hidden group">
							<Image
								src={dmac}
								alt="Darragh"
								placeholder="blur"
								height={400}
								width={400}
								className="w-full rounded-sm object-cover group-hover:brightness-50 group-hover:scale-105 transition duration-300 ease-in-out transform z-10"
							/>
							<div className="w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold text-center text-white opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 z-20">
								<h3 className="text-4xl">Darragh MacNamara</h3>
								<p className="text-lg">
									Prep & Lifestyle Coach
								</p>
							</div>
							<div className="absolute bg-[#fd5f1e] group-hover:bg-black group-hover:text-[#fd5f1e] -bottom-24 -right-24 rounded-full h-48 w-48 transition-all ease-in-out duration-300">
								<svg
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									width={48}
									height={48}
									className="ml-8 mt-8"
									viewBox="0 0 32 32">
									<path
										d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
										data-name="3-Arrow Right"
									/>
								</svg>
							</div>
						</Link>
						<Link
							href="/olan"
							className="relative overflow-hidden group">
							<Image
								src={olan}
								alt="Darragh"
								placeholder="blur"
								height={400}
								width={400}
								className="w-full rounded-sm object-cover group-hover:brightness-50 group-hover:scale-105 transition duration-300 ease-in-out transform z-10"
							/>
							<div className="w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold text-center text-white opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 z-20">
								<h3 className="text-4xl">Olan Broderick</h3>
								<p className="text-lg">
									Prep & Lifestyle Coach
								</p>
							</div>
							<div className="absolute bg-[#fd5f1e] group-hover:bg-black group-hover:text-[#fd5f1e] -bottom-24 -right-24 rounded-full h-48 w-48 transition-all ease-in-out duration-300">
								<svg
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									width={48}
									height={48}
									className="ml-8 mt-8"
									viewBox="0 0 32 32">
									<path
										d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
										data-name="3-Arrow Right"
									/>
								</svg>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
