import CategorytItem from '../categoryItem/categoryList'

const CategorytList = () => {
	return (
		<>
			<CategorytItem category="Рестораны и кафе" sum={5000} />
			<CategorytItem category="Одежда" sum={15000} />
			<CategorytItem category="Развлечения" sum={7000} />
		</>
	)
}

export default CategorytList
