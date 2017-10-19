import { max_number } from './index'
describe('given and empty array', () => {
  it('returns zero', () => {
    expect(max_number([])).toEqual(0)
  })
})

describe('given an array of numbers', () => {
  it('returns max', () => {
    expect(max_number([1, 2, 3])).toEqual(3)
  })
})
