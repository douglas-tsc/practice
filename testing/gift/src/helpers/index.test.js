import { maxNumber } from './index'
describe('given and empty array', () => {
  it('returns zero', () => {
    expect(maxNumber([])).toEqual(0)
  })
})

describe('given an array of numbers', () => {
  it('returns max', () => {
    expect(maxNumber([1, 2, 3])).toEqual(3)
  })
})
