import * as actionsTypes from '../actions/actionTypes'
import {initialState} from './initialState'

export function headerReducer (state = initialState.header, action) {
  switch (action.type) {
    case actionsTypes.SAVE_HEADER_USER_TEXT:
      return Object.assign({}, state, {
        userInput: action.text
      })
    default:
      return state
  }
}

export function footerReducer (state = initialState.footer, action) {
  switch (action.type) {
    case actionsTypes.SAVE_FOOTER_USER_TEXT:
      return Object.assign({}, state, {
        userInput: action.text
      })
    default:
      return state
  }
}
