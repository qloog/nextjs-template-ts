"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
	question: string;
	answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
	{
		question: "How much does online coaching cost?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				We offer a range of coaching packages to suit your needs and
				budget. We like to find out more about you and your goals before
				we discuss pricing, so please book a call with us to find out
				more.
			</div>
		)
	},
	{
		question: "Who is online coaching suitable for?",
		answer: (
			<p>
				Online coaching is suitable for anyone who is looking to improve
				their health, fitness and wellbeing. We work with a range of
				clients from complete beginners to advanced athletes. We offer a
				range of coaching packages to suit your needs and budget. We
				like to find out more about you and your goals before we discuss
				pricing, so please book a call with us to find out more.
			</p>
		)
	},
	{
		question: "Do you coach people who play other sports?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes, we work with a range of clients who play other sports. All
				of our coaching is fully tailored to the individuals needs.
			</div>
		)
	},
	{
		question: "Do you coach people with injuries?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes! We have experience coaching people with a wide range of
				injuries and conditions. We will work with you to find a way to
				train around your injury, and help you to progress towards your
				goals.
			</div>
		)
	}
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
	const accordion = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li>
			<button
				className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
				onClick={(e) => {
					e.preventDefault();
					setIsOpen(!isOpen);
				}}
				aria-expanded={isOpen}>
				<span
					className={`flex-1 font-regular font-bold ${
						isOpen ? "text-[#fd5f1e]" : "text-base-content/80"
					}`}>
					{item?.question}
				</span>
				<svg
					className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg">
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center transition duration-200 ease-out ${
							isOpen && "rotate-180"
						}`}
					/>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center rotate-90 transition duration-200 ease-out ${
							isOpen && "rotate-180 hidden"
						}`}
					/>
				</svg>
			</button>

			<div
				ref={accordion}
				className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
				style={
					isOpen
						? {
								maxHeight: accordion?.current?.scrollHeight,
								opacity: 1
						  }
						: { maxHeight: 0, opacity: 0 }
				}>
				<div className="pb-5 leading-relaxed">{item?.answer}</div>
			</div>
		</li>
	);
};

const FAQ = () => {
	return (
		<section className="bg-white" id="faq">
			<div className="py-16 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
				<div className="flex flex-col text-left basis-1/2">
					<p className="inline-block font-semibold text-[#fd5f1e] mb-4">
						FAQ
					</p>
					<p className="sm:text-4xl text-3xl font-extrabold text-base-content/80 bebas uppercase">
						Frequently Asked Questions
					</p>
				</div>

				<ul className="basis-1/2">
					{faqList.map((item, i) => (
						<FaqItem key={i} item={item} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default FAQ;
