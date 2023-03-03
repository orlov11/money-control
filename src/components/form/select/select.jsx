const Select = ({ label, onChange, value, name, option }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<select onChange={handleChange} id={name} name={name} value={value}>
				{option.map(item => (
					<option value={item.name} key={item._id}>
						{item.name}
					</option>
				))}
			</select>
		</>
	)
}

export default Select
