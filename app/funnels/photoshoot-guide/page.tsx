"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
	email: string;
};

export default function Page() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const form = {
			email: data.email
		};
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				"template_7y6p3d5",
				form,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		router.push("/funnels/photoshoot-guide/thank-you");
	};

	return (
		<>
			<Header />
			<section className="bg-white">
				<div className="max-w-7xl mx-auto text-base-content/80 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 py-8 lg:py-20">
					<div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start mb-8">
						<h1 className="font-extrabold text-6xl bebas uppercase mb-6">
							Get Your Photoshoot Guide
						</h1>
						<p className="text-lg leading-relaxed mb-4">
							Our 7-step guide to nail your photoshoot.
						</p>

						<input
							placeholder="Email"
							type="email"
							className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 mb-2 rounded-none w-full"
							{...register("email", {
								required: true,
								minLength: 10,
								maxLength: 80,
								pattern:
									/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
							})}
						/>
						{errors.email && (
							<p className="text-red-400 mb-2">
								{errors.email.type === "required"
									? "This field is required"
									: "Invalid email address"}
							</p>
						)}
						<button
							onClick={handleSubmit(onSubmit)}
							className="btn w-full text-xl hover:bg-[#fd5f1e] hover:text-white transition-all ease-in-out duration-300">
							GET YOUR FREE GUIDE
						</button>
					</div>
					<div className="w-full">
						<div className="relative pb-[56.25%] h-0">
							<iframe
								src="https://www.loom.com/embed/9a17fda271914caabb7ef75cf68d0fa3?sid=b4479370-d4fd-47c3-83d8-0228876e14ec"
								className="absolute top-0 left-0 w-full h-full lg:pl-6"></iframe>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
