const CategorytItem = ({ category, sum }) => {
	return (
		<li className="card">
			<span>Категория: </span>
			<span>{category}</span>
			<span>Общая сумма трат: </span>
			<span>{sum}</span>
		</li>
	)
}

export default CategorytItem
