import React from 'react'

import './incExpItem.scss'

const IncExpItem = ({ sum, remains }) => {
	return (
		<li className="card">
			<span>Дата: </span>
			<span>21.01.2023</span>
			<span>Сумма: </span>
			<span>{sum}</span>
			<span>Остаток: </span>
			<span>{remains}</span>
		</li>
	)
}

export default IncExpItem
