import React from 'react'
import { shallow } from 'enzyme'
import App from './components/App'
import { Wallet } from './components/Wallet'

describe('App', () => {
  const app = shallow(<App />)
  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
})

describe('Wallet', () => {
  const app = shallow(<App />)
  const props = { balance: 20 }
  const wallet = shallow(<Wallet {...props} />)
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot()
  })

  it('displays the balance from props', () => {
    expect(wallet.find(`[data-test='balance']`).text()).toEqual(
      'Wallet Balance: 20'
    )
  })

  it('contain a wallet component', () => {
    expect(app.find(`Connect(Wallet)`).exists()).toBe(true)
  })
})
