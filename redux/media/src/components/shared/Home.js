import React from 'react'
import { Link } from 'react-router-dom'

// Home page component. This serves as the welcome page with link to the library
const HomePage = () =>
	<div>
		<h1>
			Welcome to Media Library built with React, Redux, and Redux-saga{' '}
		</h1>
		<div>
			<Link to="/library">
				<button>
					Visit Library
				</button>
			</Link>
		</div>
	</div>

export default HomePage
