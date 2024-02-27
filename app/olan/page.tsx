import Image from "next/image";
import Header from "@/components/Header";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import TestimonialBig from "@/components/TestimonialBig";
import Calendly from "./components/Calendly";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import olan from "@/public/olan.webp";
import coaching1 from "@/public/coaching1.webp";
import coaching2 from "@/public/coaching2.webp";
import coaching3 from "@/public/coaching3.webp";

export default function Darragh() {
	return (
		<>
			<Header />
			<section
				className="bg-white text-base-content/80 flex flex-col items-center py-16 px-8 "
				id="team">
				<div className="w-full max-w-7xl flex flex-col items-center">
					<div className="w-full flex items-center">
						<Image
							src={olan}
							alt="Olan"
							placeholder="blur"
							priority={true}
							height={600}
							width={600}
							className="w-1/2 h-full rounded-sm object-cover mb-4"
						/>
						<div className="ml-6 text-left">
							<h2 className="font-bold text-2xl tracking-tight mb-8">
								Olan Broderick
							</h2>
							<p className="">
								My own fitness journey begun before I stepped
								foot inside the gym. Since a young age, I knew
								being an athlete was my passion as I played with
								high level teams in my previous sport. At the
								age of 17, I decided to put my sport aside and
								put all my focus into the gym.
								<br />
								<br />
								2 years later, my love for the gym and nutrition
								became an obsession, and this is when I decided
								to do my first bodybuilding competition. In my
								first competitive season, I took 1st place in
								PCA Manchester Junior Bodybuilding. 3 weeks
								later, I took 3rd place in Arnold Classic UK
								Junior Bodybuilding.
								<br />
								<br />
								My educational background began as soon as I
								finished school. I became a qualified personal
								trainer as soon as I left school. I studied
								Nutrition & Exercise Sciences in college, while
								also spending numerous hours self educating on
								courses, seminars and podcasts. I was coaching
								clients on the side while I was in college as
								coaching others was my true passion and desire.
								I&apos;ve transitioned to full time online
								coaching ever since and here we are today at
								Team Ignite.
								<br />
								<br />
								From qualifications, to years of experience in
								the field and walking the walk, I can help you
								conquer your own journey.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Transformations />
			<Testimonials />
			<TestimonialBig
				name="Olan Broderick"
				text="Olan has been a game-changer for me! The way he tailored my workouts to my specific needs and goals has made all the difference. Before I started working with you Olan, I had no structure in my meals whatsoever. I had no knowledge about nutrition and he taught me so much about it. Also when I started I thought I would be left starving but that wasn't the case at all!"
				img={coaching3}
			/>
			<TestimonialBig
				name="Jim Morrissey"
				text="Olan has been a game-changer for me! The way he tailored my workouts to my specific needs and goals has made all the difference. Before I started working with you Olan, I had no structure in my meals whatsoever. I had no knowledge about nutrition and he taught me so much about it. Also when I started I thought I would be left starving but that wasn't the case at all!"
				img={coaching1}
			/>
			<TestimonialBig
				name="Joe Gann"
				text="Olan has been a game-changer for me! The way he tailored my workouts to my specific needs and goals has made all the difference. Before I started working with you Olan, I had no structure in my meals whatsoever. I had no knowledge about nutrition and he taught me so much about it. Also when I started I thought I would be left starving but that wasn't the case at all!"
				img={coaching3}
			/>
			<Calendly />
			<FAQ />
			<Footer />
		</>
	);
}
