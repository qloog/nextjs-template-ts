import Image from "next/image";
import Link from "next/link";
import coaching3 from "@/public/coaching3.webp";

const Hero = () => {
	return (
		<section className="bg-white">
			<div className="max-w-7xl mx-auto  text-base-content/80 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
				<div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
					<h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
						Ignite your potential, transform your physique and
						mindset.
					</h1>
					<p className="text-lg opacity-80 leading-relaxed">
						Results driven coaching, tailored to your goals and
						lifestyle.
					</p>
					<Link href="/#form" className="btn btn-wide">
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
	);
};

export default Hero;
