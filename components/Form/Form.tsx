"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import coaching3 from "@/public/coaching3.webp";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

type Inputs = {
	name: string;
	email: string;
	phone: string;
	coach: string;
	gender: string;
	age: string;
	weight: string;
	height: string;
	goal: string;
	occupation: string;
	activity: string;
	diet: string;
	trainAge: string;
	split: string;
	injury: string;
};

export default function Form() {
	const [step, setStep] = useState<number>(1);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => (
		console.log("submitted data: ", data), handleNext()
	);

	function handleNext() {
		if (step === 5) {
			console.log("submitted");
		} else {
			setStep(step + 1);
		}
	}

	return (
		<section
			id="form"
			className=" bg-white text-black px-8 py-16 flex flex-col items-center">
			<div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
				<div className="w-full">
					<h2 className="text-4xl font-extrabold text-base-content/80 text-center mb-6 md:hidden">
						Join the team
					</h2>
					<Image
						src={coaching3}
						alt="Product Demo"
						className="object-cover w-full rounded-sm"
						width={500}
						height={500}
					/>
				</div>

				<div className="w-full flex flex-col ml-6 mt-6 md:mt-0">
					<form onSubmit={handleSubmit(onSubmit)}>
						{step === 1 ? (
							<Step1 register={register} errors={errors} />
						) : step === 2 ? (
							<Step2 register={register} errors={errors} />
						) : step === 3 ? (
							<Step3 register={register} errors={errors} />
						) : step === 4 ? (
							<Step4 register={register} errors={errors} />
						) : (
							<>
								<h2 className="text-4xl font-extrabold text-base-content/80 mb-6">
									Thank you!
								</h2>
								<p>We&apos;ll be in touch shortly</p>
							</>
						)}
						<button
							className={`btn btn-wide mt-6 ${
								step === 5 && "hidden"
							}`}>
							{step === 4 ? "Submit" : "Next"}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
