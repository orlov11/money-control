import React, { useState } from 'react'
import CategorytList from '../../components/CategoryList/CategorytItem'
import IncExpList from '../../components/incExpList/incExpList'
import MainBtn from '../../components/mainBtn/mainBtn'
import './main-page.scss'
const MainPage = () => {
	const [activeIn, setActiveIn] = useState(1)
	const [activeEx, setActiveEx] = useState(2)

	const handelChangeActive = data => {
		const id = data
		if (id % 2 === 0) {
			setActiveEx(id)
		} else {
			setActiveIn(id)
		}
	}

	return (
		<section>
			<div className="container">
				<h1 className="title">Main Page</h1>
				<div className="main">
					<div className="main__wrapper">
						<div className="main__item money">
							<h2 className="main__tiitle">Доходы</h2>
							<div className="main__switch">
								<MainBtn
									name="Операции"
									onChange={handelChangeActive}
									activeClass={activeIn}
									numClass={1}
								/>
								<MainBtn
									name="Категории"
									onChange={handelChangeActive}
									activeClass={activeIn}
									numClass={3}
								/>
							</div>
							<ul className="money__wrapper">
								{activeIn === 1 ? <IncExpList /> : <CategorytList />}
							</ul>
						</div>
						<div className="main__item money">
							<h2 className="main__tiitle">Расходы</h2>
							<div className="main__switch">
								<MainBtn
									name="Операции"
									onChange={handelChangeActive}
									activeClass={activeEx}
									numClass={2}
								/>
								<MainBtn
									name="Категории"
									onChange={handelChangeActive}
									activeClass={activeEx}
									numClass={4}
								/>
							</div>
							<ul className="money__wrapper">
								{activeEx === 2 ? <IncExpList /> : <CategorytList />}
							</ul>
						</div>
						<div className="main__item">
							<h2 className="money__wrapper">Счета</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainPage
