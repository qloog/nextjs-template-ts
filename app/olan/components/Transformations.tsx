"use client";

import React from "react";
import Image from "next/image";

const images = require.context("@/public/transformations/olan", true);
const imageList = images.keys().map((image) => images(image));

export default function Transformations() {
	return (
		<div
			id="results"
			className="w-full flex flex-col items-center bg-white text-base-content/80 px-8 py-16 lg:py-20">
			<div className="w-full max-w-7xl flex flex-col items-center justify-start">
				<h2 className="font-extrabold text-5xl bebas uppercase text-center mb-8">
					Results
				</h2>
				<div className="w-full grid grid-cols-3 xl:grid-cols-5 gap-4">
					{imageList.map((src) => (
						<div className="w-full h-full" key={src.src}>
							<Image
								src={src}
								alt="Transformation"
								height={150}
								width={150}
								quality={75}
								loading="lazy"
								placeholder="blur"
								className="object-cover w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
