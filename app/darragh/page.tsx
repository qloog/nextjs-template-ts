import Image from "next/image";
import Header from "@/components/Header";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import TestimonialBig from "@/components/TestimonialBig";
import Calendly from "./components/Calendly";
import Youtube from "./components/Youtube";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import dmac from "@/public/dmac.webp";
import coaching1 from "@/public/coaching1.webp";
import coaching3 from "@/public/coaching3.webp";

export default function Darragh() {
	return (
		<>
			<Header />
			<section
				className="bg-white text-base-content/80 flex flex-col items-center lg:py-16 px-8 "
				id="team">
				<div className="w-full max-w-7xl flex flex-col items-center">
					<div className="w-full flex flex-col lg:flex-row items-center">
						<Image
							src={dmac}
							alt="Darragh"
							placeholder="blur"
							priority={true}
							height={600}
							width={600}
							className="w-full lg:w-1/2 h-full rounded-sm object-cover mb-6"
						/>
						<div className="lg:ml-6 text-left">
							<h2 className="font-bold text-2xl tracking-tight mb-4 lg:mb-8">
								Darragh MacNamara
							</h2>
							<p className="">
								Darragh has over 10 years of experience in
								physique development and 4 years coaching
								experience.
								<br />
								<br />
								Darragh studied Commerce in University for 4
								years, went on to take accountancy exams (ACCA)
								after his undergraduate degree and worked for
								over 3 years as a accountant in the head office
								of a Fortune 500 company.
								<br />
								<br />
								However, his true passion always lay in health,
								fitness and bodybuilding and he spent years
								building his own physique and accumulating as
								much knowledge as possible.
								<br />
								<br />
								When Covid hit, Darragh started his online
								coaching business as a side hustle on the
								weekends and this quickly grew. After juggling
								both for 7 months, he decided to leave his
								secure corporate 9-5 and pursue his passion in
								coaching and helping others to transform their
								physiques.
								<br />
								<br />
								Since then Darragh has transformed 100&apos;s of
								physiques, coached clients to compete on stage
								and competed multiple times himself.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Transformations />
			<Testimonials />
			<TestimonialBig
				name="Mark Kehoe"
				text="I wasn't sure what exactly to expect when I first started but I knew I needed guidance and that's exactly what I got. Every week there was consistent feedback and Darragh was always open to contact him at any stage. I think the check ins every Sunday helped for me because if I did miss training or miss me calorie target, there was always a check in to get me back on track. After every Sunday I felt focused and ready for the week ahead. Progress was slow at start but I was told to stick to the plan and after a few weeks of filling in the progress tracker it became routine and made it soo much easier. Felt like it was an effort at the start filling in the tracker but looking back now I'm delighted I did it because it kept me on track without even noticing. I felt Darragh feedback really helped me and I could always ask him advice and he'd always get back to me. I'd advise anyone looking to take their training seriously to work with Darragh as he'll provide the guidance and knowledge that you'll need to get that extra level, while making sure you're being consistent and following the plan."
				img={coaching1}
			/>
			<TestimonialBig
				name="Jayne O'Gorman"
				text="When I came to Darragh for a 12 week plan I just wanted to improve my physique and get my diet on a good track. I achieved more than that and the support and knowledge from him is outstanding. I've had a few previous coaches before but none were as detailed and as this. He genuinely cares about how you are doing and isn't concerned only about the end results and transformation photos like a lot of online coaches are these days. I couldn't recommend him enough, check ins every week we're always on time and so detailed but straight forward. I look forward to working with him again sometime in the near future."
				img={coaching1}
			/>
			<TestimonialBig
				name="Isaac Hogan"
				text="Before starting with Darragh I was in the worst shape of my life, far too much body fat and regular take always during the week, I was literally out of breath waking up stairs and stuff it was brutal. From the very beginning Darragh was supportive, motivational and didn't just seem like he was doing his job, I felt like he actually wanted to help and wanted to see me get into much better shape and be happier and more confident in myself. I can say for sure that I achieved those things, I was never looking to get to a goal weight or anything I just wanted to tidy up my physique and get fitter, I am not running 4-5 times a week, lifting heavier than before in the gym, eating more food and more regularly than before but yet I lost weight every single week, all while feeling much more confident and just overall much more healthy. Darragh was available at any time to answer questions or to give feedback on exercises and just general tips to improve. I look back at the before picture and cannot believe I got to that point and I also look at the after picture and cannot believe I got to that point either and it couldn't have been done without Darragh's help!"
				img={coaching1}
			/>
			<Calendly />
			<Youtube />
			<FAQ />
			<Footer />
		</>
	);
}
