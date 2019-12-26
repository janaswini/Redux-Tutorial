import * as actionTypes from './actionTypes'

export function saveHeaderUserText (userInput) {
  return {
    type: actionTypes.SAVE_HEADER_USER_TEXT,
    text: userInput
  }
}

export function saveFooterUserText (userInput) {
  return {
    type: actionTypes.SAVE_FOOTER_USER_TEXT,
    text: userInput
  }
}
