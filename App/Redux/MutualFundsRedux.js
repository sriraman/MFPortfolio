import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import MutualFunds from '../mfList.json'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addMutualFund: [ 'fund' ],
  customizeView: [ 'key', 'value' ]
})

export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  list: MutualFunds,
  view: {
    "Scheme Code": true,
    "ISIN Growth": false,
    "ISIN Div Reinvestment": false,
    "Net Asset Value": false
  }
})

/* ------------- Reducers ------------- */

export const addMutualFund = (state, { fund }) => {
  return state.merge({ mutualFunds: [ ...state.mutualFunds, fund] })
}

export const customizeView = (state, { key, value }) => {
  return state.merge({
    view: {
      ...state.view,
      [key]: value
    }
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_MUTUAL_FUND]: addMutualFund,
  [Types.CUSTOMIZE_VIEW]: customizeView
})
