"use client";

import React from "react";
import Image from "next/image";

const imagesDarragh = require.context("@/public/transformations/darragh", true);
const imagesOlan = require.context("@/public/transformations/olan", true);

const imageListDarragh = imagesDarragh
	.keys()
	.map((image) => imagesDarragh(image));
const imageListOlan = imagesOlan.keys().map((image) => imagesOlan(image));

const imageList = imageListDarragh.concat(imageListOlan);

export default function Transformations() {
	return (
		<div
			id="results"
			className="w-full flex flex-col items-center bg-white text-base-content/80 px-8 py-16 lg:py-20">
			<div className="w-full max-w-7xl flex flex-col items-center justify-start">
				<h2 className="font-extrabold text-5xl tracking-tight text-center mb-8">
					Results
				</h2>
				<div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-4">
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
