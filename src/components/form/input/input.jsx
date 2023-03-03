const Input = ({ label, value, onChange, name }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				required
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
				type="text"
			/>
		</>
	)
}

export default Input
