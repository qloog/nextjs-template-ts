export default function Step4({ register, errors }: any) {
	return (
		<>
			<h2 className="text-4xl font-extrabold text-base-content/80 mb-6">
				A bit about training.
			</h2>
			<textarea
				rounded-none
				placeholder="How many years have you been training?"
				{...register("trainAge", {
					required: true,
					minLength: 1,
					maxLength: 40
				})}
				type="text"
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.trainAge && (
				<p className="text-red-400">
					{errors.trainAge.type === "required"
						? "This field is required"
						: "Enter a valid duration"}
				</p>
			)}
			<textarea
				placeholder="What is your current training split?"
				{...register("split", {
					required: true,
					minLength: 2,
					maxLength: 80
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.split && (
				<p className="text-red-400">
					{errors.split.type === "required" &&
						"This field is required"}
				</p>
			)}
			<textarea
				placeholder="Do you have any past or current injuries?"
				{...register("injury", {
					required: true,
					minLength: 2,
					maxLength: 120
				})}
				type="text"
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.injury && (
				<p className="text-red-400">
					{errors.injury.type === "required" &&
						"This field is required"}
				</p>
			)}
		</>
	);
}
