import React from 'react'
import Gift from './Gifts'
import { shallow } from 'enzyme'

describe('Gifts', () => {
  const mockRemove = jest.fn()

  const props = { id: 1, removeGift: mockRemove }
  const gift = shallow(<Gift {...props} />)

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot()
  })

  it('initializes a person and present in state', () => {
    expect(gift.state()).toEqual({ person: '', present: '' })
  })

  describe('When typing into the person input', () => {
    const person = 'Uncle'
    beforeEach(() => {
      gift
        .find('[data-test="addPersonName"]')
        .simulate('change', { target: { value: person } })
    })

    it('updates the person in state', () => {
      expect(gift.state().person).toEqual(person)
    })
  })

  describe('When typing into the present input', () => {
    const present = 'Chocolates'
    beforeEach(() => {
      gift
        .find('[data-test="addPresentName"]')
        .simulate('change', { target: { value: present } })
    })

    it('updates the person in state', () => {
      expect(gift.state().present).toEqual(present)
    })
  })

  describe('When clicking the remove button...', () => {
    beforeEach(() => {
      gift.find('[data-test="removeButton"]').simulate('click')
    })
    it('...calls the remove gifts callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(1)
    })
  })
})
