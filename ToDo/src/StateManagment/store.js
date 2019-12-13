import {createStore, combineReducers} from 'redux'

import reducerNormal from './Redux/reducer'

import reducerSaurce from './ReduxSauce'

const rootReducer = combineReducers({reducerNormal, reducerSaurce})

const store = createStore(rootReducer)

export default store
