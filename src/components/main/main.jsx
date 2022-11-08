import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'

const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="main__wrapper">
					<Link to="/main">
						<div className="main-page  nav">Главная страница</div>
					</Link>
					<Link>
						<div className="operation-page nav">Операции и редактирование </div>
					</Link>
					<Link>
						<div className="category-page nav">Категории и редактирование</div>
					</Link>
					<Link>
						<div className="score-page nav">Счета и редактирование</div>
					</Link>
					<Link>
						<div className="history-page nav">История операций</div>
					</Link>
					<Link>
						<div className="settings-page nav">Настрйоки</div>
					</Link>
				</div>
			</div>
		</main>
	)
}

export default Main
