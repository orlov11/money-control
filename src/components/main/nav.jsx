import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
import menu from './menuSettings'

const Nav = () => {
	return (
		<nav className="nav">
			<div className="container">
				<ul className="nav__wrapper">
					{menu.map(item => (
						<Link key={item._id} to={`/${item.link}`}>
							<li className="nav-page nav-item ">{item.name}</li>
						</Link>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Nav
