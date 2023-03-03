import './categoryItem.scss'

const CategorytItem = ({ category, sum, purpose }) => {
	return (
		<li className="card">
			<div>Категория: {category}</div>
			{purpose === 'Доходы' ? (
				<div>Общая сумма доходов:{sum}Р</div>
			) : (
				<div>Общая сумма трат:{sum}Р</div>
			)}
		</li>
	)
}

export default CategorytItem
