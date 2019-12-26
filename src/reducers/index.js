import { combineReducers } from 'redux'
import { headerReducer, footerReducer } from './Reducer'

const rootReducer = combineReducers({
  headerReducer,
  footerReducer
})

export default rootReducer
