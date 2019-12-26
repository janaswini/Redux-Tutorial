import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import { createLogger } from 'redux-logger'

const loggerMiddleWare = createLogger()

export const store = createStore(
  rootReducer
  // applyMiddleware(
  //   loggerMiddleWare
  // )
)
