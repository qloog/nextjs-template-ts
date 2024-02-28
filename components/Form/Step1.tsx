export default function Step1({ register, errors }: any) {
	return (
		<>
			<h2 className="text-3xl font-extrabold text-base-content/80 text-left mb-6">
				Let&apos;s get started
			</h2>
			<input
				placeholder="Name"
				{...register("name", {
					required: true,
					minLength: 3,
					maxLength: 40,
					pattern: /^[A-Za-z]+$/i
				})}
				type="text"
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.name && (
				<p className="text-red-400">
					{errors.name.type === "required"
						? "This field is required"
						: "Enter a valid name"}
				</p>
			)}
			<input
				placeholder="Email"
				{...register("email", {
					required: true,
					minLength: 10,
					maxLength: 80,
					pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none"
			/>
			{errors.email && (
				<p className="text-red-400">
					{errors.email.type === "required"
						? "This field is required"
						: "Invalid email address"}
				</p>
			)}
			<label className="text-base-content/80 text-sm mb-2">
				Enquiring to work with?
			</label>
			<select
				{...register("coach", {
					required: true
				})}
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-none">
				<option value="darragh">Darragh</option>
				<option value="olan">Olan</option>
			</select>

			<input
				placeholder="Phone Number"
				{...register("phone", {
					required: true,
					minLength: 8,
					maxLength: 12,
					pattern: /^[0-9]+$/i
				})}
				type="text"
				className="bg-white text-base-content/80 focus:ring-transparent focus:outline-none focus:border-[#fd5f1e] border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2  rounded-none"
			/>
			{errors.phone && (
				<p className="text-red-400">
					{errors.phone.type === "required"
						? "This field is required"
						: "Invalid phone number"}
				</p>
			)}
		</>
	);
}
