import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/shared/Home'
import Header from './components/shared/Header'
import MediaGallery from './components/mediaGallery'

export default class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/library" exact component={MediaGallery} />
				</div>
			</BrowserRouter>
		)
	}
}
