export default function Step2({ register, errors }: any) {
	return (
		<>
			<h2 className="text-4xl font-extrabold text-base-content/80 mb-6">
				A bit about you.
			</h2>
			<select
				placeholder="Gender"
				{...register("gender", {
					required: true
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none">
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="female">Other🤪</option>
			</select>
			{errors.gender && (
				<p className="text-red-400">
					{errors.gender.type === "required" &&
						"This field is required"}
				</p>
			)}
			<input
				placeholder="Age"
				{...register("age", {
					required: true,
					minLength: 1,
					maxLength: 10
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.age && (
				<p className="text-red-400">
					{errors.age.type === "required"
						? "This field is required"
						: "Invalid age"}
				</p>
			)}
			<input
				placeholder="Current Weight"
				{...register("weight", {
					required: true,
					minLength: 1,
					maxLength: 10
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.weight && (
				<p className="text-red-400">
					{errors.weight.type === "required"
						? "This field is required"
						: "Invalid weight"}
				</p>
			)}
			<input
				placeholder="Height"
				{...register("height", {
					required: true,
					minLength: 1,
					maxLength: 10
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.height && (
				<p className="text-red-400">
					{errors.height.type === "required"
						? "This field is required"
						: "Invalid height"}
				</p>
			)}
			<input
				placeholder="Current Goal"
				{...register("goal", {
					required: true,
					minLength: 1,
					maxLength: 80
				})}
				type="text"
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.goal && (
				<p className="text-red-400">
					{errors.goal.type === "required"
						? "This field is required"
						: "Invalid goal"}
				</p>
			)}
		</>
	);
}
