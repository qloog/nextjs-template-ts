import Image from "next/image";
import Link from "next/link";
import coaching3 from "@/public/coaching3.webp";

const Hero = () => {
	return (
		<>
			<div className="absolute diagonal-bg -z-10"></div>
			<section className="bg-transparent">
				<div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
					<div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
						<h1 className="font-extrabold text-4xl lg:text-6xl md:-mb-4 bebas uppercase">
							Ignite your{" "}
							<span className="text-[#fd5f1e]">
								potential, transform
							</span>{" "}
							your physique and mindset.
						</h1>
						<p className="text-lg leading-relaxed">
							Results driven coaching, tailored to your goals and
							lifestyle.
						</p>
						<Link
							href="/#form"
							className="btn btn-wide hover:bg-[#fd5f1e] hover:border-[#fd5f1e] hover:text-white transition-all ease-in-out duration-300">
							Get Started
						</Link>
					</div>
					<div className="lg:w-full">
						<Image
							src={coaching3}
							alt="Product Demo"
							className="w-full rounded-sm"
							priority={true}
							width={500}
							height={500}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
