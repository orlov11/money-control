import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../header/header'
import MainPage from '../../layouts/main-page/main-page'
import Main from '../main/main'

import './app.css'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/main" component={MainPage} />
			</Switch>
		</>
	)
}

export default App
