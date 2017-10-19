import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

describe('App', () => {
  const app = shallow(<App />)

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it(`initializes state with empty array of gifts`, () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('When clicking the add gift button', () => {
    beforeEach(() => {
      app.find('[data-test="addButton"]').simulate('click')
    })

    afterEach(() => {
      app.setState({ gifts: [] })
    })

    it(`adds a new gift to state`, () => {
      expect(app.state().gifts).toEqual([{ id: 1 }])
    })

    it(`adds new gift to rendered list`, () => {
      expect(app.find(`[data-test='addList']`).children().length).toEqual(1)
    })

    it(`creates a gift component`, () => {
      expect(app.find(`Gift`).exists()).toBe(true)
    })
  })

  describe('When the user wants to remove an entry', () => {
    beforeEach(() => {
      app.instance().removeGift(1)
    })

    it(`removes the gift from state`, () => {
      expect(app.state().gifts).toEqual([])
    })
  })
})
