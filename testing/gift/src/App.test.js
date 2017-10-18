import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

const app = shallow(<App />)

it('renders correctly', () => {
  expect(app).toMatchSnapshot()
})

it(`initializes state with empty array of gifts`, () => {
  expect(app.state().gifts).toEqual([])
})

it(`adds a new gift to state when clicking on 'add gift' button`, () => {
  app.find(`[data-test='addButton']`).simulate('click')
  expect(app.state().gifts).toEqual([{ id: 1 }])
})
