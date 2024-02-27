import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import image from "@/app/opengraph-image.png";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	// Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
	themeColor: config.colors.main,
	width: "device-width",
	initialScale: 1
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			data-theme={config.colors.theme}
			className={font.className}>
			{config.domainName && (
				<head>
					<PlausibleProvider domain={config.domainName} />
					<meta content="text/html; charset=utf-8" />
					<link rel="icon" href="/favicon.ico" sizes="any" />
					<link
						rel="icon"
						href="/icon.png"
						type="image/<generated>"
						sizes="<generated>"
					/>
					<link
						rel="apple-icon"
						href="/apple-icon.png"
						type="image/<generated>"
						sizes="<generated>"
					/>
					<meta name="twitter:card" content="summary"></meta>
					<meta
						name="twitter:title"
						content="Ignite Coaching - Bodybuilding & Lifestyle Coaching"></meta>
					<meta
						name="twitter:description"
						content="Team Ignite are both a coaching service and community with the mission of helping you to realise your true physical and mental potential. Our mission is to bring together as many like minded individuals as possible, with a shared passion for progression - in and outside of the gym."></meta>

					<meta
						property="og:description"
						content="Team Ignite are both a coaching service and community with the mission of helping you to realise your true physical and mental potential. Our mission is to bring together as many like minded individuals as possible, with a shared passion for progression - in and outside of the gym."></meta>
					<meta
						property="og:title"
						content="Ignite Coaching - Bodybuilding & Lifestyle Coaching"></meta>
				</head>
			)}
			<body>
				{/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
