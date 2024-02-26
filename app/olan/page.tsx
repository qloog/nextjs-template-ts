import Image from "next/image";
import Header from "@/components/Header";
import Transformations from "./components/Transformations";
import Testimonials from "./components/Testimonials";
import Calendly from "./components/Calendly";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import olan from "@/public/olan.webp";

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
			<Calendly />
			<FAQ />
			<Footer />
		</>
	);
}
