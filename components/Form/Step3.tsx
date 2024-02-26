export default function Step3({ register, errors }: any) {
	return (
		<>
			<h2 className="text-4xl font-extrabold text-base-content/80 mb-6">
				Day to day.
			</h2>
			<input
				placeholder="What is your occupation?"
				{...register("occupation", {
					required: true,
					minLength: 1,
					maxLength: 40
				})}
				type="text"
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.occupation && (
				<p className="text-red-400">
					{errors.occupation.type === "required" &&
						"This field is required"}
				</p>
			)}
			<label className="text-black/50 text-sm mb-2">
				Daily activity level
			</label>
			<select
				placeholder="What is your current activity level?"
				{...register("activity", {
					required: true
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none">
				<option value="low">Low</option>
				<option value="moderate">Moderate</option>
				<option value="high">High</option>
			</select>
			{errors.activity && (
				<p className="text-red-400">
					{errors.activity.type === "required" &&
						"This field is required"}
				</p>
			)}
			<textarea
				rounded-none
				placeholder="Do you currently follow a meal plan or structured diet?"
				{...register("diet", {
					required: true,
					minLength: 2,
					maxLength: 120
				})}
				type="text"
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.diet && (
				<p className="text-red-400">
					{errors.diet.type === "required" &&
						"This field is required"}
				</p>
			)}
		</>
	);
}
