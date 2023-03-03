import CategorytItem from '../categoryItem/categoryItem'

const CategorytList = () => {
	return (
		<>
			<CategorytItem category="Рестораны и кафе" sum={5000} />
			<CategorytItem category="Одежда" sum={15000} />
			<CategorytItem category="Диведенды" sum={7000} purpose="Доходы" />

			<button className="btn">К категориям</button>
		</>
	)
}

export default CategorytList
