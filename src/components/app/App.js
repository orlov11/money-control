import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../header/header'
import MainPage from '../../layouts/main-page/main-page'
import Nav from '../main/nav'

import './app.scss'
import AccoutPage from '../../layouts/account-page/account-page'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Nav} />
				<Route path="/main" component={MainPage} />
				<Route path="/account" component={AccoutPage} />
			</Switch>
		</>
	)
}

export default App
