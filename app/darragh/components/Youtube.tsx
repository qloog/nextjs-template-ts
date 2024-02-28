"use client";

import { useState, useEffect, useRef } from "react";

export default function Youtube() {
	const [load, setLoad] = useState(false);
	const videoRef = useRef(null);
	const videoId = "4paSfXGpIBE";

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setLoad(true);
				observer.disconnect();
			}
		});

		observer.observe(videoRef.current);

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={videoRef}
			className="w-full h-fit bg-white text-base-content/80 flex flex-col items-center justify-center px-8 py-16 lg:py-20">
			<h2 className="font-extrabold text-5xl bebas uppercase text-center mb-8">
				My latest Youtube video
			</h2>
			<div className="w-full h-full flex justify-center max-w-7xl">
				{load ? (
					<iframe
						width="100%"
						height=""
						src={`https://www.youtube.com/embed/${videoId}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="aspect-video"></iframe>
				) : (
					<div className="h-[500px]">Loading...</div>
				)}
			</div>
		</div>
	);
}

// https://www.youtube.com/watch?v=4paSfXGpIBE
