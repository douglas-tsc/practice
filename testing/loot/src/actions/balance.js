import * as constants from './constants'
export const setBalance = balance => {
  return {
    types: constants.SET_BALANCE,
    balance
  }
}
