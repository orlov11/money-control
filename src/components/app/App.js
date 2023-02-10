import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../header/header'
import MainPage from '../../layouts/main-page/main-page'
import Nav from '../main/nav'

import './app.scss'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Nav} />
				<Route path="/main" component={MainPage} />
			</Switch>
		</>
	)
}

export default App
