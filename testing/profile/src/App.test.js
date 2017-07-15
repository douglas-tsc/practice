import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders a name, an image and a list of hobbies to the page', () => {
  const MyProfileApp = renderer.create(<App />).toJSON()
  expect(MyProfileApp).toMatchSnapshot()
})
