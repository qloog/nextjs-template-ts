import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/public/logo.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="max-w-7xl mx-auto px-8 py-16 border-t border-base-content/10">
				<div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<Link
							href="/#"
							aria-current="page"
							className="flex gap-2 justify-center md:justify-start items-center">
							<Image
								src={logo}
								alt={`${config.appName} logo`}
								className="object-contain"
								placeholder="blur"
								priority={true}
								width={150}
								height={150}
							/>
						</Link>

						<p className="mt-3 text-sm text-base-content/80">
							{config.appDescription}
						</p>
						<p className="mt-3 text-sm text-base-content/60">
							Copyright © {new Date().getFullYear()} - All rights
							reserved
						</p>
					</div>
					<div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
								LINKS
							</div>

							<div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
								<Link href="/#results" className="link">
									Results
								</Link>
								<Link href="/#testimonials" className="link">
									Testimonials
								</Link>
								<Link href="/#team" className="link">
									Team
								</Link>
							</div>
						</div>

						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
								LEGAL
							</div>

							<div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
								<Link href="/tos" className="link">
									Terms of services
								</Link>
								<Link href="/privacy-policy" className="link">
									Privacy policy
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
